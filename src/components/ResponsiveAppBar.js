import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ResponsiveAppBar(props) {
    return (
        <AppBar position='sticky' enableColorOnDark style={{ marginTop: 10 }}> 
        <Toolbar>
          <Grid container justifyContent="flex-start" alignItems={'stretch'}>
            <Typography>
              DATA PUGS
            </Typography>
            <Typography ml={2}>
              Tournaments
            </Typography>
            <Typography ml={2}>
              Home Rules
            </Typography>
            {/* <MenuItem onClick={() => handleMenuClick('/')}>
              Home Rules
            </MenuItem> */}
          </Grid>
          <Grid container justifyContent="flex-end">
            <IconButton onClick={() => props.setLightMode(!props.lightMode)} color="inherit">
              {props.lightMode === true ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    )
}
