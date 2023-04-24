import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import StakeButton from "./StakeButton";
import StakingCard from "../../../components/StakingCard";

interface NftProps {
  tokenId: number;
  url: string;
  staked?: boolean;
}
interface Props {
  stakeAddress: string;
  nft: NftProps;
}
const UnStakedNFTCard: React.FC<Props> = (props) => {
  const { nft, stakeAddress } = props;

  const { account } = useWeb3React();

  return (
    <>
      {account && (
        <StakingCard
          name={`Soonabot #${nft?.tokenId}`}
          image={nft?.url}
          stakeButton={<StakeButton nft={nft} stakeAddress={stakeAddress} />}
        />
      )}
    </>
  );
};

export default UnStakedNFTCard;