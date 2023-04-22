import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../contracts/EGGSBurnLeaderboard.json"; // Import the contract ABI
import { Box } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Rank from "./Rank";

const Leaderboard = ({ contractAddress, top = 10 }: any) => {
  const [leaderboard, setLeaderboard] = useState([]);

  const { library } = useWeb3React();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const provider = new ethers.providers.Web3Provider(library.provider);
      if (!provider || !ethers.utils.isAddress(contractAddress)) return;

      const contract = new ethers.Contract(contractAddress, abi, provider);
      try {
        const topBurners = await contract.getTopBurners(top);
        const burnersData: any = await Promise.all(
          topBurners.map(async (burner: any) => {
            const burnedAmount = await contract.burnedTokens(burner);
            return {
              address: burner,
              burnedAmount: ethers.utils.formatUnits(burnedAmount, 18),
            };
          })
        );
        setLeaderboard(burnersData);
      } catch (error: any) {
        console.error(`Error fetching leaderboard: ${error.message}`);
      }
    };
    if (library.provider) {
      fetchLeaderboard();
    }
  }, [library, contractAddress, top]);

  const shortenAddress = (address: any) => {
    if (!address) return "";
    return address.slice(0, 6) + "..." + address.slice(-4);
  };

  const AddressWithTooltip = ({ address }: any) => {
    return (
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        title={address}
      >
        {shortenAddress(address)}
      </span>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {leaderboard.map((burner: any, index) => (
        <Rank
          rank={index + 1}
          address={shortenAddress(burner.address)}
          highlight={{ label: "Eggs", value: burner?.burnedAmount }}
        />
      ))}
    </Box>
  );
};

export default Leaderboard;
