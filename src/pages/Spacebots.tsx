import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useWeb3React } from "@web3-react/core"

import { ethers } from "ethers";
// import { web3 } from "web";

import SPACEBOTS_ABI from "../contracts/spacebots_abi.json";

import { injected } from "../components/wallet/connectors"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import { useState, useEffect } from 'react';


import spacebots_img from "../assets/images/Game.png";

const spacebotsContractAddress = "0x8b76D80C30715D1c772B760D69c76C8f2EAF50eA";

export default function Spacebots() {

    const { active, account, library, activate, deactivate, chainId } = useWeb3React()

    useEffect(() => {
        if (active) {
            loadBots()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])


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
            spacebotsContractAddress,
            SPACEBOTS_ABI,
            provider
        )
        console.log("contract", contract)
        console.log("account", account)


        const data = await contract.walletOfOwner(account)
        console.log("data:", data)
        const items: Array<any> = await Promise.all(data.map(async (i: any) => {
            let token_index = i.toNumber()
            console.log("token_index:", token_index)

            const metadata_url = await contract.tokenURI(token_index)
            console.log("metadata_url:", metadata_url)

            let obj = { 
                
                tokenId: token_index,
                url: metadata_url
             }

            // const metadata = await axios.get(metadata_url)

            // console.log("metadata:", metadata.data)
            return obj
        }))

        console.log("items:", items)
        setBots(items)
        console.log("bots:", bots)
        // const tokenContract = new ethers.Contract(iotabotsContractAddress, IOTABOTS_ABI, provider)
        // console.log("tokenContract:", tokenContract)
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
                Your Spacebots:</Typography>
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
                                    image={spacebots_img}
                                    alt="Spacebots"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        {`Spacebots ${bot.tokenId}`}
                                    </Typography>
                                    <Typography
                                        component="h4"
                                        variant="h4"
                                        align="center"
                                        color="#fff"
                                        gutterBottom
                                    >
                                        <a rel="noreferrer" target="_blank" href={bot.url}>Play</a>
                                    </Typography>
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
                        Spacebots
                    </Typography>
                    {/* End hero unit */}
                    {content}
                </Container>
            </main>
        </>
    );
}