import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
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
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Container fixed>
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
        </ThemeProvider>
    );
}

export default App;
