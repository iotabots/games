import React from "react";
import { Typography, Skeleton, Box } from "@mui/material";

interface Props {
  totalSupply: string | null;
  playerBalance: string | null;
}

const Balance: React.FC<Props> = (props) => {
  const { totalSupply, playerBalance } = props;

  const infos = [
    { label: "Current Supply", value: totalSupply },
    { label: "Player Balance", value: playerBalance },
  ];

  return (
    <Box sx={styles.container}>
      {infos.map((info) => (
        <Box sx={styles.card}>
          <Typography color="text.secondary" mt={0} mb={1}>
            {info.label}
          </Typography>
          <Typography variant="h5" my={0}>
            {info.value ? `${info.value} EGGS` : <Skeleton width={60} />}
          </Typography>
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
    gap: 4,
  },
  card: {
    bgcolor: "background.paper",
    p: 4,
    flex: 1,
    borderRadius: 2,
    boxShadow: 1,
  },
};

export default Balance;
