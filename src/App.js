import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    Paper,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';

import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import RestoreIcon from '@mui/icons-material/Restore';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { ThemeProvider, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { spacing } from '@mui/system';

const theme = createTheme();

const useStyles = makeStyles(() => ({
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
        padding: spacing(6),
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: '32px',
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
    const classes = useStyles();
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                            <Button
                                color="inherit"
                                variant="outlined"
                                onClick={handleClickOpen}
                            >
                                Log In
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">
                                    Log In
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Log In to see videos
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Adress"
                                        type="email"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="password"
                                        label="Password"
                                        type="password"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        onClick={handleClose}
                                        color="primary"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={handleClose}
                                        color="primary"
                                    >
                                        Log In
                                    </Button>
                                </DialogActions>
                            </Dialog>
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
                                        color="white"
                                        gutterBottom
                                    >
                                        Material UI
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="white"
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
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Material UI
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Do ea sint nulla do enim duis pariatur et duis ut
                            mollit. Velit Lorem aliqua amet magna voluptate.
                            Irure id ea anim occaecat occaecat adipisicing
                            aliqua est aute. Nisi officia irure consectetur
                            magna ex culpa fugiat.
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid
                                container
                                spacing={2}
                                justifyContent="center"
                                mb={2}
                            >
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Start Now
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Learn more
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        image="https://source.unsplash.com/random"
                                        title="image title"
                                        className={classes.cardMedia}
                                    />
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography variant="h5" gutterBottom>
                                            Blog post
                                        </Typography>
                                        <Typography>
                                            Blog post. Amet occaecat sint nulla
                                            consectetur nisi ullamco.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <LayersIcon />
                                        <PlayCircleFilledIcon />
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<FolderIcon />}
                    />
                </BottomNavigation>
                <Typography
                    align="center"
                    color="textSecondary"
                    component={'p'}
                    variant="subtitle1"
                >
                    Website with Material UI
                </Typography>
            </footer>
        </ThemeProvider>
    );
}

export default App;
