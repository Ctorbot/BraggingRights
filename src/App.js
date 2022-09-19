import './App.css';
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme, Grid, Typography, Toolbar, Card, Chip, AppBar } from '@mui/material'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  var [darkMode, setDarkMode] = React.useState(false);

  var theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#F55D3E"
          },
          secondary: {
            main: '#8A4F7D',
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

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <AppBar position='sticky' enableColorOnDark> 
          <Toolbar>
            <Grid container justifyContent="flex-start" alignItems={'stretch'}>
              <Typography>
                Cool Logo Here
              </Typography>
              <Typography ml={2}>
                Tournaments
              </Typography>
              <Typography ml={2}>
                Home Rules
              </Typography>
            </Grid>
            <Grid container justifyContent="flex-end">
              <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
                {darkMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
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