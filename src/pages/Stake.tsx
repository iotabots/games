import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useWeb3React } from "@web3-react/core";


import { injected } from "../components/wallet/connectors";
import { NftStake } from "../components/NftStake";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { StakeApes } from "../components/StakeApes";
import { StakeLilApes } from "../components/StakeLilApes";
import { StakeIOTAHeros } from "../components/StakeIOTAHeros";

export default function Stake() {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();

  var content;
  if (active) {
    content = (
      <>
        <Card>
          <CardContent sx={{ flexGrow: 1 }}>
            <NftStake />
          </CardContent>
        </Card>
        <Card>
          <CardContent sx={{ flexGrow: 1 }}>
            <StakeApes />
            <hr />
            <StakeLilApes />
            <hr />
            <StakeIOTAHeros />
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
          >
            STAKE ZONE
          </Typography>
          {/* End hero unit */}
          {content}
        </Container>
      </main>
    </>
  );
}
