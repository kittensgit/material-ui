import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Website MUI</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default App;
