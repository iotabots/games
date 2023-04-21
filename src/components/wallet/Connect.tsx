import { Box, Button, Container } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";

export default function Connect() {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();
  const callback = function (err: any) {
    console.log("callback1", err);
  };
  async function connect() {
    try {
      let x = await activate(injected, callback);
      console.log("activated", x);
      console.log("activated", active);
      console.log("activated", account);
      // useEffect(() => {
      //     loadBots()
      // }, [])
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      console.log("deactivated");
    } catch (ex) {
      console.log(ex);
    }
  }
  let content;
  if (active) {
    content = (
      <Container maxWidth="sm">
        <Box sx={{ padding: "10px", textAlign: "center" }}>
          {active ? (
            <span>
              Connected with{" "}
              <b>{`${account!.substring(0, 6)}...${account!.substring(
                account!.length - 4
              )}`}</b>
              (ChainId: {chainId})
            </span>
          ) : (
            <span>Not connected</span>
          )}
          <Button color="error" variant="outlined" onClick={disconnect}>
            Disconnect
          </Button>
        </Box>
      </Container>
    );
  } else {
    content = (
      <Container maxWidth="sm">
        <Box sx={{ padding: "10px", textAlign: "center" }}>
          <Button variant="outlined" onClick={connect}>
            Connect to MetaMask
          </Button>
        </Box>
      </Container>
    );
  }

  return <div>{content}</div>;
}
