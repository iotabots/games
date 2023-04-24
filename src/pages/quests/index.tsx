import Head from "next/head";
import React, { useEffect, useState } from "react";
import Base from "../../layouts/Base";
import { Box, Container, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import QuestList from "./components/QuestList";
import Leaderboard from "./components/Leaderboard";
import { Web3Provider } from "@ethersproject/providers";
import QuestsABI from "../../contracts/Quests.json";
import { ADDRESSES } from "../../contracts/addresses";
import { ethers } from "ethers";

// Replace with your actual Quest and Player types
interface Quest {
  id: number;
  description: string;
  points: number;
  requiredTokenAddress: string;
  requiredTokenAmount: string;
  active: boolean;
  solved: boolean;
  userCanSolve: boolean;
}

interface Player {
  user: string;
  points: number;
}

export default function Quests() {
  const { library, account } = useWeb3React<Web3Provider>();
  const [quests, setQuests] = useState<Array<any>>([]);
  const [leaderboard, setLeaderboard] = useState<Array<any>>([]);
  const [playerPoints, setPlayerPoints] = useState(0);

  useEffect(() => {
    if (!library) return;
    if (!account) return;
    fetchQuests();
    fetchLeaderboard();
  }, [library, account]);

  const fetchQuests = async () => {
    if (!library) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const questContract = new ethers.Contract(
      ADDRESSES.questsAddr,
      QuestsABI.abi,
      signer
    );
    const userPoints = await questContract.userPoints(account);
    setPlayerPoints(userPoints.toNumber());
    const questCount = await questContract.nextQuestId();
    const fetchedQuests: Quest[] = [];

    for (let i = 0; i < questCount; i++) {
      const questData = await questContract.quests(i);
      let userCanSolve = false;
      try {
        let data = await questContract.canSolveQuest(i);
        console.log("data", data);
        userCanSolve = data;
      } catch (error) {}

      const quest: Quest = {
        id: questData.id,
        description: questData.description,
        points: questData.points,
        requiredTokenAddress: questData.requiredTokenAddress,
        requiredTokenAmount: questData.requiredTokenAmount,
        active: questData.active,
        solved: false,
        userCanSolve: userCanSolve,
      };
      console.log("quest", quest);
      fetchedQuests.push(quest);
    }

    setQuests(fetchedQuests);
  };

  async function fetchLeaderboard() {
    if (!library) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const questContract = new ethers.Contract(
      ADDRESSES.questsAddr,
      QuestsABI.abi,
      signer
    );

    const rawLeaderboard = await questContract.getTop10Players();
    const leaderboard: Player[] = rawLeaderboard.map((playerData: any) => ({
      user: playerData.user,
      points: playerData.points.toNumber(),
    }));

    setLeaderboard(leaderboard);
  }

  const handleSolve = async (questId: number) => {
    if (!library) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const questContract = new ethers.Contract(
      ADDRESSES.questsAddr,
      QuestsABI.abi,
      signer
    );

    try {
      let tx = await questContract.completeQuest(questId, {
        gasLimit: 1000000,
      });

      console.log(`Solve quest ${questId}`);

      let recipe = await tx.wait();

      console.log("recipe", recipe);

      for (let index = 0; index < recipe.events.length; index++) {
        const event = recipe.events[index];
        if (event.event === "QuestCompleted") {
          console.log("QuestCompleted", event);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Quests</title>
        <meta name="description" content="Join the Treasures of Shimmer. Do quests and climb the leaderboard!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Quests</Typography>
          <Typography variant="h3">Points: {playerPoints}</Typography>
          <Container>
            <Box sx={{ marginTop: 4 }}>
              {quests.length <= 0 ? (
                "Loading quests..."
              ) : (
                <QuestList quests={quests || []} onSolve={handleSolve} />
              )}
            </Box>
            <Box sx={{ marginTop: 4 }}>
              {quests.length <= 0 ? (
                "Loading leaderboard..."
              ) : (
                <Leaderboard leaderboard={leaderboard || []} />
              )}
            </Box>
          </Container>
        </Container>
      </Base>
    </>
  );
}
