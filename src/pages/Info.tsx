import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Info() {
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
            Information
          </Typography>
          <h1>Testnet Information</h1>
          <p>
            Welcome to our testnet platform! Before using our site, it is
            crucial that you understand the implications of interacting with
            testnet assets and games.
          </p>
          <h2>What is a testnet?</h2>
          <p>
            A testnet is a parallel network used for testing and development
            purposes. It mimics the main blockchain network (mainnet) but uses
            test tokens and assets, which have no real-world value. This allows
            developers and users to experiment with new features, games, and
            NFTs without risking actual assets.
          </p>
          <h2>Testnet assets and games</h2>
          <p>
            Please note that all NFTs and games on our platform are currently
            running on the testnet. This means that:
          </p>
          <ol>
            <li>
              <p>
                <strong>No real value:</strong> The NFTs and tokens you acquire
                on the testnet have no real-world value. Do NOT trade real
                tokens or assets for testnet NFTs or tokens.
              </p>
            </li>
            <li>
              <p>
                <strong>Ownership reset:</strong> Ownership of all testnet NFTs
                and tokens will be reset according to specific snapshots once we
                migrate to the mainnet. This means that any testnet assets you
                acquire will not be carried over to the mainnet.
              </p>
            </li>
            <li>
              <p>
                <strong>Snapshot information:</strong> To learn more about the
                snapshots, please refer to our{" "}
                <a href="https://iotabots.io/faq" target="_new">
                  IOTABOTS FAQ
                </a>
                .
              </p>
            </li>
          </ol>
          <h2>Stay informed</h2>
          <p>
            It's essential to stay informed about our platform updates,
            especially concerning the migration from testnet to mainnet. We
            recommend regularly checking our{" "}
            <a href="https://docs.iotabots.io/blog/" target="_new">
              Announcements
            </a>{" "}
            page and subscribing to our newsletter for the latest information.
          </p>
          <p>
            Thank you for participating in our testnet, and we appreciate your
            understanding and support as we work towards launching on the
            mainnet!
          </p>
          <p>And Have Fun! 🤖</p>
        </Container>
      </main>
    </>
  );
}
