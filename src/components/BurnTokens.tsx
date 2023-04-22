import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../contracts/EGGSBurnLeaderboard.json"; // Import the contract ABI
import Typography from "@mui/material/Typography";
import TOKEN from "../contracts/Token.json";

import { useWeb3React } from "@web3-react/core";
const BurnTokens = ({ contractAddress, tokenContractAddress }: any) => {
  const { library } = useWeb3React();
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const burnTokens = async () => {
    const provider = new ethers.providers.Web3Provider(library.provider);
    if (!provider) {
      setStatus("No provider available");
      return;
    }

    if (!ethers.utils.isAddress(contractAddress)) {
      setStatus("Invalid contract address");
      return;
    }

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      setStatus("Sending transaction...");
      const tx = await contract.burnTokens(ethers.utils.parseUnits(amount, 18));
      setStatus("Transaction sent, waiting for confirmation...");
      await tx.wait();
      setStatus("Transaction confirmed, tokens burned");
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const approveContract = async () => {
    const provider = new ethers.providers.Web3Provider(library.provider);
    if (!provider) {
      setStatus("No provider available");
      return;
    }

    if (!ethers.utils.isAddress(contractAddress)) {
      setStatus("Invalid contract address");
      return;
    }

    const signer = provider.getSigner();
    const amountToApprove = ethers.utils.parseUnits(amount, 18);

    try {
      setStatus("Sending approval transaction...");
      let token = new ethers.Contract(tokenContractAddress, TOKEN.abi, signer);
      const tx = await token.approve(contractAddress, amountToApprove);
      setStatus("Approval transaction sent, waiting for confirmation...");
      await tx.wait();
      setStatus("Approval transaction confirmed");
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Typography gutterBottom variant="h4" component="h4">
        Burn EGGS Tokens
      </Typography>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to burn"
        />
        <button onClick={approveContract}>Approve Contract</button>

        <button onClick={burnTokens}>Burn Tokens</button>
      </div>
      {status && <p>{status}</p>}
    </div>
  );
};

export default BurnTokens;
