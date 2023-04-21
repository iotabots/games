import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useWeb3React } from "@web3-react/core";

import { ethers } from "ethers";
// import { web3 } from "web";

import TEST_SOONABOTS_ABI from "../contracts/iotabots_abi.json";

import { injected } from "../components/wallet/connectors";
import { SoonabotRacing } from "../components/SoonabotRacing";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useState, useEffect } from "react";

import SoonabotRacingABI from "../contracts/SoonabotRace.json";

import addresses from "../contracts/addresses.json";


const TestSonabotsContractAddress =
  "0x2f5C574ddF275b4cDfAE26fE8e75621c4B7E106e";

export default function Soonabots() {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();

  useEffect(() => {
    if (active) {
      loadBots();
      const provider = new ethers.providers.Web3Provider(
        library.currentProvider
      );
      const contract = new ethers.Contract(
        addresses.soonabotRaceAddr,
        SoonabotRacingABI.abi,
        provider
      );
      setGameContract(contract);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const [bots, setBots] = useState<Array<any>>([]);
  const [gameContract, setGameContract] = useState<any>(null);

  async function loadBots() {
    // await connect();
    const provider = new ethers.providers.Web3Provider(library.currentProvider);
    let contract = new ethers.Contract(
      TestSonabotsContractAddress,
      TEST_SOONABOTS_ABI,
      provider
    );
    console.log("contract", contract);
    console.log("account", account);

    const data = await contract.walletOfOwner(account);
    console.log("data:", data);
    const items: Array<any> = await Promise.all(
      data.map(async (i: any) => {
        let token_index = i.toNumber();
        console.log("token_index:", token_index);

        const metadata_url = await contract.tokenURI(token_index);
        console.log("metadata_url:", metadata_url);

        let obj = {
          tokenId: token_index,
          url: metadata_url,
        };

        // const metadata = await axios.get(metadata_url)

        // console.log("metadata:", metadata.data)
        return obj;
      })
    );

    console.log("items:", items);
    setBots(items);
    // const tokenContract = new ethers.Contract(iotabotsContractAddress, IOTABOTS_ABI, provider)
    // console.log("tokenContract:", tokenContract)
  }

  var content;
  if (active) {
    content = (
      <>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="#fff"
          gutterBottom
        >
          Your Soonabots:
        </Typography>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: "center" }}>
            <Grid container spacing={2}>
              {bots.map((bot, index) => (
                <Grid item key={index} xs={12} sm={3} md={3}>
                  <Card
                  //  sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h6">
                        {`Soonabots ${bot.tokenId}`}
                      </Typography>
                      <Typography
                        component="h4"
                        variant="h4"
                        align="center"
                        color="#fff"
                        gutterBottom
                      >
                        🤖
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <hr />
        <br />
        <br />
        <br />
        <Card
        // sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="h6">
              {`New web3 Game:`}
            </Typography>
            <SoonabotRacing contract={gameContract} bots={bots} />
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* <Connect /> */}
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
          >
            Soonabots
          </Typography>
          {/* End hero unit */}
          {content}
        </Container>
      </main>
    </>
  );
}
