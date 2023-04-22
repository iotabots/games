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
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

// ABIs
import SoonabotRacingABI from "../../../contracts/SoonabotRace.json";
import ERC20ABI from "../../../contracts/Token.json";
import SoonabotNFT from "../../../contracts/IERC721Enumerable.json";

import { ADDRESSES } from "../../../contracts/addresses";
import { Countdown } from "../../../components/Countdown";
import useSoonabots from "../../../hooks/contracts/useSoonabots";

// Contract addresses
const eggsTokenAddress = "0xdFCF738225F6508F7A664c3c7D236432501e16d4"; // Test Token
const soonabotAddr = "0x2f5C574ddF275b4cDfAE26fE8e75621c4B7E106e"; // Test Token

export const SoonabotRacing = () => {
  const { account, library } = useWeb3React();

  const { data, isFetched, error, refetch } = useSoonabots(
    account || "",
    ADDRESSES.soonabotsAddr
  );

  const treasuryEventStartDate = new Date("2023-05-03T15:00:00"); // Update this to the actual event start date and time

  const [soonabotId, setSoonabotId] = useState(0);
  const [balance, setBalance] = useState(0);
  const [bots, setBots] = useState<Array<any>>([]);
  const [races, setRaces] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [availableBots, setAvailableBots] = useState([
    { id: 1, canPlay: true },
    { id: 2, canPlay: false },
    { id: 3, canPlay: true },
  ]);
  const showMessage = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const checkPlayedBots = async (_bots?: any) => {
    let array: any = [];
    if (_bots) {
      console.log("_bots set", _bots);
      array = _bots.map((bot: any) => {
        console.log("bot", bot);
        return {
          id: bot,
          canPlay: true,
        };
      });
    } else {
      console.log("bots not set", bots);
      if (bots.length === 0) return
      bots.forEach((bot: any) => {});
      for (let index = 0; index < bots.length; index++) {
        const bot = bots[index];
        array.push({
          id: bot.tokenId,
          canPlay: true,
        });
      }
    }
    console.log("array", array);
    setAvailableBots(array);
  };

  useEffect(() => {
    console.log("bots", bots);
    const fetchRaces = async () => {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        ADDRESSES.soonabotRaceAddr,
        SoonabotRacingABI.abi,
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
        } catch (error) {
          race = null;
        }
      } while (race);

      console.log("races", races);
      let _balance = await contract.balanceOf(signer.getAddress());
      setBalance(_balance.toNumber());
      setRaces(races);
      checkPlayedBots();
    };

    if (account && data && isFetched) {
      fetchRaces();
      console.log("soonabot sdata", data);
      if (data.hasOwnProperty("error")) {
        console.error("Das läuft net");
      } else {
        console.log("Das läuft:", data);
        setBots(data as number[]);
        checkPlayedBots(data as number[]);
        refetch()
      }
    }
  }, [account, library, loading]);

  const handleSoonabotIdChange = (e: any) => {
    setSoonabotId(e.target.value);
  };

  const joinOrCreateRace = async () => {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        ADDRESSES.soonabotRaceAddr,
        SoonabotRacingABI.abi,
        signer
      );

      const eggsTokenContract = new ethers.Contract(
        eggsTokenAddress,
        ERC20ABI,
        signer
      );

      const entryFee = ethers.utils.parseUnits("1", 18); // Assuming 18 decimals in EGGS token
      await eggsTokenContract.approve(ADDRESSES.soonabotRaceAddr, entryFee);

      const txJoin = await contract.play(soonabotId);
      await txJoin.wait();
      showMessage("Successfully joined the race! 🚀🎉");
    } catch (error) {
      console.error("Error:", error);
      showMessage("Error: Unable to join or create a race. 😢");
    }
    setSoonabotId(0);
    checkPlayedBots();
    setLoading(false);
  };

  return (
    <div>
      <Typography variant="h4">Soonabot Racing</Typography>
      <Typography variant="h6">Race Wins: {balance}</Typography>
      <Box my={2} textAlign="center">
        <Countdown targetDate={treasuryEventStartDate} />
        <Typography variant="body1">
          The leaderboard will reset and the real test race starts:{" "}
          {treasuryEventStartDate.toLocaleString()}
        </Typography>
      </Box>
      <FormControl fullWidth margin="normal">
        <InputLabel id="soonabot-select-label">Soonabot ID</InputLabel>
        {availableBots.length}
        <Select
          labelId="soonabot-select-label"
          value={soonabotId}
          onChange={handleSoonabotIdChange}
          fullWidth
        >
          {data && availableBots.map((bot: any) => (
            <MenuItem key={bot.id} value={bot.id}>
              {bot.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box my={2} textAlign="center">
        <Button
          variant="contained"
          onClick={joinOrCreateRace}
          sx={{ display: loading ? "none" : "inline" }}
        >
          PLAY!
        </Button>
        {loading && <CircularProgress />}
        <Typography>{message}</Typography>
      </Box>

      <Typography variant="h6">List of Races:</Typography>
      <List>
        {races.map((race, index) => (
          <ListItem key={index}>
            <ListItemText
              sx={{ maxWidth: "100px" }}
              primary={`Race ${index + 1} `}
            />
            <ListItemText primary={`Bots: `} />
            {race[0].map((bot: any) => (
              <>
                {`${race[2].toNumber() === bot.toNumber() ? "🏆" : ""}${bot} `}
              </>
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
