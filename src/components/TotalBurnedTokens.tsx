import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import TOKEN from "../contracts/Token.json";
import { useWeb3React } from "@web3-react/core";

const TotalBurnedTokens = ({ _provider, tokenAddress }: any) => {
  const [totalBurnedTokens, setTotalBurnedTokens] = useState('');
  const deadAddress = '0x000000000000000000000000000000000000dEaD';
  const { library } = useWeb3React();
  useEffect(() => {
    const fetchTotalBurnedTokens = async () => {
        const provider = new ethers.providers.Web3Provider(library.currentProvider);
      if (!provider || !ethers.utils.isAddress(tokenAddress)) return;

      const tokenContract = new ethers.Contract(tokenAddress, TOKEN.abi, provider);
      try {
        const burnedTokens = await tokenContract.balanceOf(deadAddress);
        setTotalBurnedTokens(ethers.utils.formatUnits(burnedTokens, 18));
      } catch (error: any) {
        console.error(`Error fetching total burned tokens: ${error.message}`);
      }
    };

    fetchTotalBurnedTokens();
  }, [library, tokenAddress]);

  return (
    <div>
      <h2>Total Burned Tokens</h2>
      <p>{totalBurnedTokens ? `${totalBurnedTokens} EGGS` : 'Loading...'}</p>
    </div>
  );
};

export default TotalBurnedTokens;
