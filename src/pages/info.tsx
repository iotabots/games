import Head from "next/head";
import React from "react";
import Base from "../layouts/Base";
import { Container, Typography } from "@mui/material";
import Hero from "../components/Hero";

export default function Info() {
  return (
    <>
      <Head>
        <title>Info</title>
        <meta name="description" content="Last Hope - Quest to Shimmer EVM for the IOTABOTS Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base
        hero={
          <Hero image="https://cdn.discordapp.com/attachments/420674357652750367/1099385876334772244/IMG-20230406-WA0002.png" />
        }
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Last Hope - Quest to Shimmer EVM
          </Typography>
          <Typography color="text.secondary">
            The IOTABOTS ecosystem invites you to join us on this extraordinary
            journey as we set sail for the Treasury of Shimmer event. With a
            treasure trove of rewards to be won and exciting challenges to be
            conquered, there has never been a better time to be a part of the
            IOTABOTS community.
          </Typography>
          <br />
          <Typography color="text.secondary">
            Of our share in the $SMR tokens, 10% will go to the IOTABOTS team,
            and a whopping 90% will be distributed to our amazing IOTABOTS
            community members. Remember, every transaction counts.
          </Typography>
          <br />
          <Typography color="text.secondary">
            As an added bonus, the EGGS tokens you win can already be traded on
            the current DEXs on the ShimmerEVM Testnet - shimmerSea and iotabee.
          </Typography>
          <br />
          <Typography color="text.secondary">
            Don't miss out on this unique opportunity to showcase your skills,
            test our dApp, and contribute to the IOTABOTS legend. We look
            forward to seeing you on the high seas of the ShimmerEVM testnet,
            where glory and fortune await.
          </Typography>
          <br />
          <Typography color="text.secondary">
            Stay connected with the IOTABOTS community for the latest news and
            updates on this thrilling adventure. Together, we shall conquer the
            challenges ahead and emerge victorious in the Treasury of Shimmer
            event.
          </Typography>
          <br />
          <Typography color="text.secondary">
            Join us, brave IOTABOTS pioneers, as we embark on this unforgettable
            journey and make history in the world of decentralized applications.
          </Typography>
          <br />
          <Typography color="text.secondary">
            Have fun and good luck!
          </Typography>
        </Container>
      </Base>
    </>
  );
}
