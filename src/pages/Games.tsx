import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useWeb3React } from "@web3-react/core";
import * as React from "react";

import { ethers } from "ethers";
// import { web3 } from "web";

import IOTABOTS_ABI from "../contracts/iotabots_abi.json";
import GAME from "../contracts/Game.json";
import TOKEN from "../contracts/Token.json";

import { injected } from "../components/wallet/connectors";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";

import axios from "axios";

import { useState, useEffect } from "react";

// const iotabotsContractAddress = "0x6c2D60145cDD0396bd03298693495bf98fcdD93E"; // LIVE
const iotabotsContractAddress = "0xb5A53615170e4684E488C9E1c641aB9dDC307489"; // Test

const gameContractAddress = "0x3CE8aB86dED969004102caB650060373e04A0448"; // GameTest

const tokenContractAddress = "0xdFCF738225F6508F7A664c3c7D236432501e16d4"; // Test Token

export default function Games() {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [winner, setWinner] = useState({ message: "" });
  const [loading, setLoading] = useState(false);

  const [playerTokens, setPlayerTokens] = useState("0.0");
  const [tokenSupply, setTokenSupply] = useState("0.0");

  useEffect(() => {
    if (active) {
      loadBots();
      loadGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  interface Bot {
    attributes: Array<object>;
    date: number;
    description: string;
    dna: string;
    edition: number;
    image: string;
    name: string;
  }

  const [bots, setBots] = useState<Array<any>>([]);

  const callback = function (err: any) {
    console.log("callback1", err);
  };

  async function connect() {
    try {
      let x = await activate(injected, callback);
      console.log("activated", x);
      console.log("activated", active);
      console.log("activated", account);
      // useEffect(() => {
      //     loadBots()
      // }, [])
    } catch (ex) {
      console.log(ex);
    }
  }

  async function loadBots() {
    // await connect();
    const provider = new ethers.providers.Web3Provider(library.currentProvider);
    let contract = new ethers.Contract(
      iotabotsContractAddress,
      IOTABOTS_ABI,
      provider
    );
    console.log("contract", contract);
    console.log("account", account);

    const data = await contract.walletOfOwner(account);
    console.log("data:", data);
    const items: Array<Bot> = await Promise.all(
      data.map(async (i: any) => {
        let token_index = i.toNumber();
        console.log("token_index:", token_index);

        const metadata_url = await contract.tokenURI(token_index);
        console.log("metadata_url:", metadata_url);

        const metadata = await axios.get(metadata_url);

        console.log("metadata:", metadata.data);
        return metadata.data;
      })
    );

    console.log("items:", items);
    setBots(items);
    console.log("bots:", bots);
    // const tokenContract = new ethers.Contract(iotabotsContractAddress, IOTABOTS_ABI, provider)
    // console.log("tokenContract:", tokenContract)
  }

  async function loadGame() {
    // await connect();
    console.log("loadGame");

    const provider = new ethers.providers.Web3Provider(library.currentProvider);
    let contract = new ethers.Contract(gameContractAddress, GAME.abi, provider);
    console.log("contract", contract);
    console.log("account", account);

    let token = new ethers.Contract(tokenContractAddress, TOKEN.abi, provider);
    let playerTokenBanlance = await token.balanceOf(account);
    playerTokenBanlance = ethers.utils.formatEther(playerTokenBanlance);
    console.log("playerTokenBanlance", playerTokenBanlance);
    let totalSupply = await token.totalSupply();
    totalSupply = ethers.utils.formatEther(totalSupply);
    setTokenSupply(totalSupply);
    console.log("totalSupply", totalSupply);
    setPlayerTokens(playerTokenBanlance);

    let botsTokenBanlance = await token.balanceOf(iotabotsContractAddress);
    botsTokenBanlance = ethers.utils.formatEther(botsTokenBanlance);
    console.log("botsTokenBanlance", botsTokenBanlance);
  }

  async function start_game(bet: any) {
    try {
      console.log("loadGame");

      setWinner({ message: "" });
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(
        library.currentProvider
      );
      const signer = provider.getSigner();
      let contract = new ethers.Contract(gameContractAddress, GAME.abi, signer);

      console.log("start_game", bots);
      await contract.createSingleGame(bots[0]?.edition, bet, {
        value: ethers.utils.parseEther("1"),
      });

      contract.once("gamePlayed", (winner: string, _player_bet, _bot_bet) => {
        console.log("gamePlayed");
        console.log(winner, _player_bet.toNumber(), _bot_bet.toNumber());

        if (winner && winner.length > 0) {
          if (winner === account) {
            console.log("😀 won");
            setWinner({
              message: `😀 You won 10 EGGS! 🎉`,
            });
          } else if (winner === gameContractAddress) {
            console.log("🤖 won");
            setWinner({
              message: `Sorry - your 🤖 won!`,
            });
          } else {
            console.log("Draw!");
            setWinner({
              message: `Draw! There is no winner!`,
            });
          }
        }
        setLoading(false);
        handleOpen();
        loadGame();
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      console.log("deactivated");
    } catch (ex) {
      console.log(ex);
    }
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  var content;
  if (active) {
    content = (
      <>
        <br />
        <Container maxWidth="sm">
          <Box
            sx={{ bgcolor: "#cfe8fc", padding: "10px", textAlign: "center" }}
          >
            {active ? (
              <span>
                Connected with{" "}
                <b>{`${account!.substring(0, 6)}...${account!.substring(
                  account!.length - 4
                )}`}</b>
              </span>
            ) : (
              <span>Not connected</span>
            )}
            <p>ChainId: {chainId}</p>
            <Button variant="outlined" onClick={disconnect}>
              Disconnect
            </Button>
          </Box>
        </Container>
        <hr />
        <br />

        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="h6">
              Total Supply: {tokenSupply} EGGS
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              Player Balance: {playerTokens} EGGS
            </Typography>
          </CardContent>
        </Card>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="#fff"
          gutterBottom
        >
          Your IOTABOTS:
        </Typography>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: "center" }}>
            {bots.map((bot, index) => (
              <Grid item key={index} xs={12} sm={12} md={12}>
                <Card
                // sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    height="100%"
                    component="img"
                    image={bot.image}
                    alt="IOTABOT"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h6">
                      {`IOTABOT ${bot.name}`}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">
                      {`Play against your IOTABOT!`}
                    </Typography>
                    <br />
                    <br />

                    <Button
                      disabled={loading}
                      className="playBtn"
                      variant="outlined"
                      onClick={() => start_game(0)}
                    >
                      ✊
                    </Button>
                    <Button
                      disabled={loading}
                      className="playBtn"
                      variant="outlined"
                      onClick={() => start_game(1)}
                    >
                      ✋
                    </Button>
                    <Button
                      disabled={loading}
                      className="playBtn"
                      variant="outlined"
                      onClick={() => start_game(2)}
                    >
                      ✌️
                    </Button>
                    <br />
                    <br />
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <p className="result_field">Choose and play!</p>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                IOTABOTS Game
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {winner ? winner.message : ""}
              </Typography>
              <Button onClick={handleClose}>Okay!</Button>
            </Box>
          </Modal>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginBottom: "30px",
              marginTop: "50px",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="h6">
                Rules
              </Typography>
              <Typography gutterBottom variant="body1">
                <ol>
                  <li>
                    Each player must connect their wallet to the IOTABOTVERSE
                    platform and hold an IOTABOT (ERC721 Token) to participate
                    in the game.
                  </li>
                  <li>Players can only play against their own IOTABOT.</li>
                  <li>
                    Each game round consists of one move: Rock, Paper, or
                    Scissors.
                  </li>
                  <li>
                    To initiate a game, the player must submit a move by signing
                    a transaction on the ShimmerEVM network.
                  </li>
                  <li>
                    The IOTABOT will automatically submit its move, which can be
                    determined randomly or based on predefined logic.
                  </li>
                  <li>
                    Once both moves have been submitted, the smart contract will
                    determine the winner using the standard Rock Paper Scissors
                    rules:
                    <ul>
                      <li>Rock beats Scissors</li>
                      <li>Scissors beats Paper</li>
                      <li>Paper beats Rock</li>
                    </ul>
                  </li>
                  <li>If the player wins, they are awarded 10 EGGS tokens.</li>
                  <li>
                    In case of a tie or a loss, the game is declared a draw or a
                    loss respectively, and no rewards will be distributed.
                  </li>
                  <li>
                    Have fun!
                  </li>
                </ol>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </>
    );
  } else {
    content = (
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", padding: "10px", textAlign: "center" }}>
          <Button variant="outlined" onClick={connect}>
            Connect to MetaMask
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
          >
            IOTABOTS Games
          </Typography>
          {/* End hero unit */}
          {content}
        </Container>
      </main>
    </>
  );
}
