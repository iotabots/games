import { Box, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

import { ADDRESSES } from "../../../contracts/addresses";
import { getStakedNFTs, loadNfts } from "./utils";
import { UnStakedNFTCard } from "./UnStakedNFTCard";
import { StakedNFTCard } from "./StakedNFTCard";
import useSoonabots from "../../../hooks/contracts/useSoonabots";

export const StakeSoonabots = () => {
  const { active, account, library } = useWeb3React();
  const [nfts, setNfts] = useState<any>([]);
  const [stakedNfts, setStakedNfts] = useState<any>([]);

  const { data } = useSoonabots(account || "", ADDRESSES.soonabotsAddr);

  useEffect(() => {
    if (active && account) {
      loadNfts(library, ADDRESSES.soonabotsAddr, account).then((data) => {
        setNfts(data);
      });
      getStakedNFTs(library, ADDRESSES.soonabotsStakeAddr, account).then(
        (data) => {
          setStakedNfts(data);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account, data]);

  return (
    <div>
      <Typography variant="h4">Soonabots</Typography>
      <Typography color="text.secondary">Coming soon</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
          mb: 4,
        }}
      >
        {account &&
          stakedNfts.length > 0 &&
          stakedNfts.map((a: any, index: number) => (
            <StakedNFTCard
              key={index}
              stakeAddress={ADDRESSES.soonabotsStakeAddr}
              nft={a}
            />
          ))}
        {account &&
          nfts.length > 0 &&
          nfts.map((a: any, index: number) => (
            <UnStakedNFTCard
              key={index}
              stakeAddress={ADDRESSES.soonabotsStakeAddr}
              nft={a}
            />
          ))}
      </Box>
    </div>
  );
};
