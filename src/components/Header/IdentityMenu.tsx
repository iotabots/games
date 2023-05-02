import React from "react";
import Link from "next/link";

import { useWeb3React } from "@web3-react/core";

import { Box } from "@mui/material";
import { ConnectButton } from "../../web3/ConnectButton";
import ProfileImage from "./ProfileImage";

interface WhitelistItem {
  id: string;
  address: string;
}

export const IdentityMenu: React.FC = () => {
  const { account, library } = useWeb3React<any>();
  const [bots, setBots] = React.useState<number[]>([]);

  const load = async (): Promise<boolean> => {
    const URL =
      "https://raw.githubusercontent.com/iotabots/save-the-bots/main/all.txt";

    const res = await fetch(URL);
    const data = await res.text();

    const airdropAddresses: WhitelistItem[] = [];

    if (!data) {
      return false;
    }

    const array = data.split("\n");
    for (let index = 0; index < array.length - 1; index += 1) {
      const botData = array[index].split(":");
      const obj = {
        id: botData[0],
        address: botData[1],
      };
      airdropAddresses.push(obj);
    }

    const iotabots: number[] = [];
    airdropAddresses.forEach((obj) => {
      if (obj.address === account) {
        iotabots.push(Number(obj.id));
      }
    });
    setBots(iotabots);
    return true;
  };

  React.useEffect(() => {
    if (account) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      {account ? (
        <Link href="/profile">
          <Box sx={{ cursor: "pointer" }}>
            <ProfileImage id={bots[0]} />
          </Box>
        </Link>
      ) : (
        <ConnectButton />
      )}
    </Box>
  );
};

export default IdentityMenu;
