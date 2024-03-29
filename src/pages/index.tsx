import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Base from "../layouts/Base";
import { GAMES } from "../mocks/games";
import GameCard from "../components/GameCard";
import Hero from "../components/Hero";
import SMR from "../assets/SMR";

export default function Home() {
  return (
    <>
      <Head>
        <title>IOTABOTS GAMES</title>
        <meta
          name="description"
          content="Enter the Multiverse of the IOTABOTS Ecosystem. Play Games, trade NFTs and join the IOTABOTS Community!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base hero={<Hero image={GAMES[0].image} />}>
        <Container maxWidth="md">
          <Typography
            variant="caption"
            fontSize={14}
            gutterBottom
            color="text.secondary"
          >
            *BEE* *BOB* *BOO*
          </Typography>
          <Typography variant="h1">Enter the Multiverse</Typography>
          <Typography color="text.secondary">
            On the 2nd November 2021, the first 500 IOTABOTS were minted for
            free on the public IOTA Smart Contracts EVM Testnet. More drops
            soon! More fun now!
          </Typography>
          <Typography variant="h3" sx={{ mt: 4, mb: 1 }}>
            Become a Treasure Hunter
          </Typography>
          <Typography color="text.secondary">
            Greetings, BOTS 🤖 enthusiasts and treasure hunters. The IOTABOTS
            ecosystem is excited to announce its participation in the grand
            Treasury of Shimmer event, a two-week-long incentive campaign
            starting on **03.05.2023**. This event aims to reward projects and
            users for participating in the public testing of the ShimmerEVM
            chain and the dApps deployed on it. As part of this adventure, we
            are introducing an engaging lineup of games and services that will
            not only test our dApp but also offer you the chance to win
            fantastic rewards. 🎁
          </Typography>
          <Box
            sx={{
              bgcolor: "primary.main",
              borderRadius: 2,
              boxShadow: 1,
              overflow: "hidden",
              my: 4,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 1) 100%)",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                p: 4,
                position: "relative",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h4">
                  Get Test Tokens
                </Typography>
                <Typography>
                  You can get test tokens for free from Faucet.
                </Typography>
                <Link
                  target="_blank"
                  href="https://evm-toolkit.evm.testnet.shimmer.network/"
                >
                  <Button
                    sx={{ height: 40, mt: 2 }}
                    color="secondary"
                    variant="contained"
                  >
                    Get Test Shimmer (SMR)
                  </Button>
                </Link>
              </Box>
              <SMR />
            </Box>
          </Box>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Join the Treasury of Shimmer Event: A Thrilling Adventure Awaits
            You.
          </Typography>
          <List>
            <ListItem>
              * IOTABOTS ecosystem is participating in the Treasury of Shimmer
              event
            </ListItem>
            <ListItem>
              * Three engaging games and services introduced for IOTABOT NFT
              holders and the community
            </ListItem>
            <ListItem>
              * A share of 1,300,000 $SMR tokens to be won: 10% for the team and
              90% for the community
            </ListItem>
            <ListItem>
              * EGGS tokens can be already traded on the Testnet{" "}
              <Link
                sx={{ ml: 0.5, mr: 0.5 }}
                target="_blank"
                href="https://shimmersea.finance/swap"
              >
                ShimmerSea
              </Link>{" "}
              and{" "}
              <Link
                sx={{ ml: 0.5, mr: 0.5 }}
                target="_blank"
                href="https://earlybee.iotabee.com/dex/swap"
              >
                iotabee
              </Link>
              .
            </ListItem>
            <ListItem>* Event starts on 03.05.2023</ListItem>
          </List>
        </Container>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Play now
          </Typography>
          <Box sx={styles.games}>
            {GAMES.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </Box>
        </Container>
      </Base>
    </>
  );
}

const styles = {
  games: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 4, sm: 6 },
  },
};
