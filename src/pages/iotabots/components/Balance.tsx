import React from "react";

import { Typography, Skeleton, Box } from "@mui/material";
import useTokenBalance from "../../../hooks/useTokenBalance";
import { ADDRESSES } from "../../../contracts/addresses";

interface Props {
  totalSupply: string | null;
  playerBalance: string | null;
  account: string;
}

const Balance: React.FC<Props> = (props) => {
  const { totalSupply, playerBalance, account } = props;

  const { data, isError, isLoading, refetch } = useTokenBalance(
    account,
    ADDRESSES.eggsAddr
  );

  console.log("💿 Data", data);
  console.log("💫 Data Loading", isLoading);
  console.log("❌ Data Error", isError);

  const infos = [
    { label: "Current Supply", value: totalSupply },
    { label: "Player Balance", value: data },
  ];

  return (
    <Box sx={styles.container}>
      {infos.map((info) => (
        <Box sx={styles.card}>
          <Typography color="text.secondary" fontSize={14} mt={0}>
            {info.label}
          </Typography>
          <Box sx={styles.wrapper}>
            <Typography variant="h6" my={0} mr={1}>
              {info.value ? String(info.value) : <Skeleton width={60} />}
            </Typography>
            <Typography fontWeight={700} fontSize={12} color="text.secondary">
              EGGS
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    marginBottom: "30px",
    gap: 2,
  },
  card: {
    bgcolor: "background.paper",
    p: 2,
    flex: 1,
    borderRadius: 2,
    boxShadow: 1,
  },
  wrapper: {
    display: "flex",
    alignItems: "flex-end",
  },
};

export default Balance;
