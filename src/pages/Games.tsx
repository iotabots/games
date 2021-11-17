import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useWeb3React } from "@web3-react/core"

import { ethers } from "ethers";
// import { web3 } from "web";

import IOTABOTS_ABI from "../contracts/iotabots_abi.json";
import GAME from "../contracts/Game.json";

import { injected } from "../components/wallet/connectors"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios'

import { useState, useEffect } from 'react';

// const iotabotsContractAddress = "0x6c2D60145cDD0396bd03298693495bf98fcdD93E"; // LIVE
const iotabotsContractAddress = "0x866fe4fcA79A98825eE0eB566C62c1f11B9aB461"; // Test


const gameContractAddress = "0x6d6C7a7016d6FdeD000d2E74840131b13F33fDC0"; // GameTest

export default function Games() {

    const { active, account, library, activate, deactivate, chainId } = useWeb3React()

    const [winner, setWinner] = useState({ message: "" });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (active) {
            loadBots()
            loadGame()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])

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
        console.log("callback1", err)
    }

    async function connect() {
        try {
            let x = await activate(injected, callback)
            console.log("activated", x)
            console.log("activated", active)
            console.log("activated", account)
            // useEffect(() => {
            //     loadBots()
            // }, [])
        } catch (ex) {
            console.log(ex)
        }
    }

    async function loadBots() {
        // await connect();
        const provider = new ethers.providers.Web3Provider(library.currentProvider)
        let contract = new ethers.Contract(
            iotabotsContractAddress,
            IOTABOTS_ABI,
            provider
        )
        console.log("contract", contract)
        console.log("account", account)


        const data = await contract.walletOfOwner(account)
        console.log("data:", data)
        const items: Array<Bot> = await Promise.all(data.map(async (i: any) => {
            let token_index = i.toNumber()
            console.log("token_index:", token_index)

            const metadata_url = await contract.tokenURI(token_index)
            console.log("metadata_url:", metadata_url)

            const metadata = await axios.get(metadata_url)

            console.log("metadata:", metadata.data)
            return metadata.data
        }))

        console.log("items:", items)
        setBots(items)
        console.log("bots:", bots)
        // const tokenContract = new ethers.Contract(iotabotsContractAddress, IOTABOTS_ABI, provider)
        // console.log("tokenContract:", tokenContract)
    }

    async function loadGame() {


        // await connect();
        console.log("loadGame")

        const provider = new ethers.providers.Web3Provider(library.currentProvider)
        let contract = new ethers.Contract(
            gameContractAddress,
            GAME.abi,
            provider
        )
        console.log("contract", contract)
        console.log("account", account)



    }

    async function start_game(bet: any) {
        try {
            console.log("loadGame")

            setWinner({ message: "" });
            setLoading(true);

            const provider = new ethers.providers.Web3Provider(library.currentProvider)
            const signer = provider.getSigner();
            let contract = new ethers.Contract(
                gameContractAddress,
                GAME.abi,
                signer
            )

            console.log("start_game", bots)
            await contract.createSingleGame(bots[0]?.edition, bet)


            contract.once("gamePlayed", (winner: string, _player_bet, _bot_bet) => {
                console.log("gamePlayed");
                console.log(winner, _player_bet.toNumber(), _bot_bet.toNumber());

                let bot_symbol;
                switch (_bot_bet.toNumber()) {
                    case 0:
                        bot_symbol = "✊";
                        break;
                    case 1:
                        bot_symbol = "✋";
                        break;

                    case 2:
                        bot_symbol = "✌️";
                        break;
                }
                let player_symbol;
                switch (_player_bet.toNumber()) {
                    case 0:
                        player_symbol = "✊";
                        break;
                    case 1:
                        player_symbol = "✋";
                        break;

                    case 2:
                        player_symbol = "✌️";
                        break;
                }

                if (winner && winner.length > 0) {
                    if (winner === account) {
                        console.log("Player won")
                        setWinner({ message: `Player: ${player_symbol} Bot: ${bot_symbol} --- Player won! 🎉` });
                    } else if (winner === gameContractAddress) {
                        console.log("Bot won")
                        setWinner({ message: `Player: ${player_symbol} Bot: ${bot_symbol} --- Bot won! 🤖` });
                    } else {
                        console.log("Draw!")
                        setWinner({ message: `Player: ${player_symbol} Bot: ${bot_symbol} --- Draw!` });
                    }
                }
                setLoading(false);

            });



        } catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            deactivate()
            console.log("deactivated")
        } catch (ex) {
            console.log(ex)
        }
    }


    var content;
    if (active) {
        content = <>
            <br />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', padding: "10px", textAlign: "center" }} >

                    {active ? <span>Connected with <b>{`${account!.substring(0, 6)}...${account!.substring(account!.length - 4)}`}</b></span> : <span>Not connected</span>}
                    <p>ChainId: {chainId}</p>
                    <Button variant="outlined" onClick={disconnect} >Disconnect</Button>
                </Box>
            </Container>
            <hr />
            <br />

            <Typography
                component="h3"
                variant="h3"
                align="center"
                color="#fff"
                gutterBottom
            >
                Your IOTABOTS:</Typography>
            <Container maxWidth="sm">
                <Box sx={{ textAlign: 'center' }} >

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

                                    <Button disabled={loading} className="playBtn" variant="outlined" onClick={() => start_game(0)}>✊</Button>
                                    <Button disabled={loading} className="playBtn" variant="outlined" onClick={() => start_game(1)}>✋</Button>
                                    <Button disabled={loading} className="playBtn" variant="outlined" onClick={() => start_game(2)}>✌️</Button>
                                    <br />
                                    <br />
                                    {loading
                                        ? <CircularProgress />
                                        : <p className="result_field">{winner ? winner.message : ""}</p>
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Box>
            </Container>
        </>;
    } else {
        content =
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', padding: "10px", textAlign: "center" }} >

                    <Button variant="outlined" onClick={connect} >Connect to MetaMask</Button></Box>
            </Container>;
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