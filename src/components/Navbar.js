import brlogo from '..//images/br-logo.png';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

export default function NavBar() {
    return (
        <AppBar position="sticky" color="inherit">
            <Toolbar variant="dense">
                <img src={brlogo} alt="brlogo" />
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    
                </IconButton>
                <Button background-color="secondary" color="secondary" aria-label="menu" sx={{ mr: 4 }}>
                    Test
                </Button>
                <Typography variant="h6" color="black" component="div">
                Photos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}