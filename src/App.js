import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { spacing } from '@mui/system';

const theme = createTheme();
console.log(theme);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    mainFeaturesPost: {
        position: 'relative',
        marginBottom: spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: spacing(9),
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Container fixed>
                    <div className={classes.overlay} />
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Website MUI
                        </Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined">
                                Log In
                            </Button>
                        </Box>
                        <Button color="secondary" variant="contained">
                            Sign Up
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <Paper
                    className={classes.mainFeaturesPost}
                    style={{
                        backgroundImage: `url(https://source.unsplash.com/random)`,
                    }}
                >
                    <Container fixed>
                        <Grid container>
                            <Grid item md={6} mb={4}>
                                <div
                                    className={classes.mainFeaturesPostContent}
                                >
                                    <Typography
                                        mt={9}
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Material UI
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Tempor velit consectetur amet amet ipsum
                                        nisi exercitation aliquip excepteur
                                        exercitation nostrud.
                                    </Typography>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                    >
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </ThemeProvider>
    );
}

export default App;
