import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

// ABIs
import SoonabotRacingABI from "../contracts/SoonabotRace.json";
import ERC20ABI from "../contracts/Token.json";
// import ERC721ABI from "../contracts/iotabots_abi.json";

// Contract addresses
const SoonaRaceContractAddr = "0x342d2Fa65Ea46Eb9028053095904d08860A82fF3";
const eggsTokenAddress = "0xdFCF738225F6508F7A664c3c7D236432501e16d4"; // Test Token
// const TestSonabotsContractAddr = "0x2f5C574ddF275b4cDfAE26fE8e75621c4B7E106e";

const SoonabotRacing = ({ _contract }: any) => {
  const { library } = useWeb3React();

  const [soonabotId, setSoonabotId] = useState(0);
  const [races, setRaces] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    const fetchRaces = async () => {
      const provider = new ethers.providers.Web3Provider(
        library.currentProvider
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        SoonaRaceContractAddr,
        SoonabotRacingABI,
        signer
      );
      const races = [];
      let raceId = 0;
      let race;

      do {
        try {
          race = await contract.getRace(raceId);
          races.push(race);
          raceId++;
          console.log("race", race);
        } catch (error) {
          console.log("error", error);
          race = null;
        }
      } while (race);

      console.log("races", races);

      setRaces(races);
    };

    fetchRaces();
  }, [library, loading]);

  const handleSoonabotIdChange = (e: any) => {
    setSoonabotId(e.target.value);
  };

  const joinOrCreateRace = async () => {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(
        library.currentProvider
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        SoonaRaceContractAddr,
        SoonabotRacingABI,
        signer
      );

      const eggsTokenContract = new ethers.Contract(
        eggsTokenAddress,
        ERC20ABI.abi,
        signer
      );

      // const soonabotNFTContract = new ethers.Contract(
      //   TestSonabotsContractAddr,
      //   ERC721ABI,
      //   signer
      // );

      const entryFee = ethers.utils.parseUnits("1", 18); // Assuming 18 decimals in EGGS token
      await eggsTokenContract.approve(SoonaRaceContractAddr, entryFee);

      const latestRaceId = races.length - 1;
      const latestRace = latestRaceId >= 0 ? races[latestRaceId] : null;
      let raceIdToJoin = latestRaceId;

      if (!latestRace || latestRace[1].length >= 3) {
        const txCreate = await contract.createRace();
        await txCreate.wait();
        raceIdToJoin++;
      }

      const txJoin = await contract.joinRace(raceIdToJoin, soonabotId);
      await txJoin.wait();
      showMessage("Successfully joined the race!");
    } catch (error) {
      console.error("Error:", error);
      showMessage("Error: Unable to join or create a race.");
    }
    setSoonabotId(0);
    setLoading(false);
  };

  return (
    <div>
      <Typography variant="h4">Soonabot Racing</Typography>
      <TextField
        label="Soonabot ID"
        type="number"
        value={soonabotId}
        onChange={handleSoonabotIdChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={joinOrCreateRace}
        fullWidth
      >
        Join or Create Race
      </Button>
      <Box my={2}>
        {loading && <CircularProgress />}
        <Typography>{message}</Typography>
      </Box>
      <Typography variant="h6">List of Races:</Typography>
      <List>
        {races.map((race, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Race ${index + 1} `} />
            <ListItemText primary={`${race[1].length} player(s)`} />
            <ListItemText primary={`Bots: `} />
            {race[0].map((bot: any) => (
              <ListItemText
                primary={`${race[2].toNumber() === bot.toNumber() ? "🏆" : ""}${bot} `}
              />
            ))}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">
        To participate, you need to pay an entry fee of 1 EGGS token and have a
        Soonabot NFT. Enter your Soonabot ID and click the button to join or
        create a race. Each race can have up to 3 bots.
      </Typography>
    </div>
  );
};

export default SoonabotRacing;
