import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../contracts/EGGSBurnLeaderboard.json"; // Import the contract ABI

const Leaderboard = ({ provider, contractAddress, top = 10 }: any) => {
  const [leaderboard, setLeaderboard] = useState([]);
  provider = new ethers.providers.Web3Provider(provider);
  useEffect(() => {
    const fetchLeaderboard = async () => {
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

    fetchLeaderboard();
  }, [provider, contractAddress, top]);

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
    <div>
      <h2>Leaderboard: Top {top} Burners</h2>
      <table>
        <thead>
          <tr style={{width: "100%", minWidth: "2000px"}}>
            <th style={{width: "(100/x)%"}}>Rank</th>
            <th style={{width: "(100/x)%"}}>Address</th>
            <th style={{width: "(100/x)%"}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((burner: any, index) => (
            <tr key={burner?.address}>
              <td>{index + 1}</td>
              <td>
                <AddressWithTooltip address={burner.address} />
              </td>
              <td>{burner?.burnedAmount} EGGS</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
