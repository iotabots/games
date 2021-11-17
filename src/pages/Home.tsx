import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from "react-router-dom";
import spacebots_img from "../assets/images/Game.png";

export default function Home() {

    return (
        <>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >


                    <Container id="what" maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            IOTABOTS GAMES
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            *BEE* *BOB* *BOO*
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            On the 2nd November 2021, the first 500 IOTABOTS were minted for free on the public IOTA Smart Contracts EVM Testnet. More drops soon!
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            *BEE* *BOB* *BOO*
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="#fff"
                        gutterBottom
                    >
                        Available Games
                    </Typography>
                    {/* End hero unit */}
                    <Grid container spacing={4}>

                        <Grid item key={1} xs={12} sm={12} md={6}>
                            <NavLink to="/games">
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxHeight: '280px',
                                            minHeight: '280px',
                                            padding: '10px'
                                            // 16:9
                                            // pt: '56.25%',
                                        }}
                                        image={`http://assets.iotabots.io/${1}.png`}
                                        alt="IOTABOT"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            {`IOTABOTS `}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            {`Rock Paper & Scissors `}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </NavLink>
                        </Grid>

                        <Grid item key={1} xs={12} sm={12} md={6}>
                            <NavLink to="/spacebots">

                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxHeight: '280px',
                                            minHeight: '280px',
                                            padding: '10px'
                                            // 16:9
                                            // pt: '56.25%',
                                        }}
                                        image={spacebots_img}
                                        alt="Spacebots"
                                    />
                                    <CardContent sx={{ flexGrow: 0 }}>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            {`Spacebots `}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            {`Discover the Space `}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
}