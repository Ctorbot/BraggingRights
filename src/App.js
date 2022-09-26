import './App.css';
import headerImage from './images/arcade.jpg'
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme, Grid, Typography, Toolbar, Card, Chip, AppBar, Paper } from '@mui/material'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  var [lightMode, setLightMode] = React.useState(false);

  var theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: lightMode ? "light" : "dark",
          primary: {
            main: "#F55D3E"
          },
          secondary: {
            main: '#8A4F7D',
          },
          background: {
            default: lightMode ? "#fff" : "#121212"
          }          
        },
        typography: {
          fontFamily: 'Dosis',
          fontWeightLight: 400,
          fontWeightRegular: 500,
          fontWeightMedium: 600,
          fontWeightBold: 700
        }
      })
  );

  const styles = {
    paperContainer: {
        height: 350,
        width: 'auto',
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        marginTop: -100
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <AppBar position='sticky' enableColorOnDark style={{ margin: 10, width: '99%' }}> 
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
            </Grid>
            <Grid container justifyContent="flex-end">
              <IconButton onClick={() => setLightMode(!lightMode)} color="inherit">
                {lightMode === true ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      <Paper style={styles.paperContainer} square>
      </Paper>
      <Grid container justifyContent="flex-start" alignItems="center" padding={2} spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((gameRoomNumber) => (
                <Grid xs={3} padding={2}>
                  <Card key={gameRoomNumber} sx={{ minWidth: "stretch", height: 200 }}>
                    <Typography>
                      Game Room Title {gameRoomNumber}
                    </Typography>
                    <Chip label="Austin" />
                    <Chip label="Dylan"/>
                  </Card>
                </Grid>
              ))}
      </Grid>
    </ThemeProvider>
  );
}

export default App;