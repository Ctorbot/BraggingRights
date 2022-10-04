import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import GameRoom from './components/GameRooms';
import HomeRules from './components/HomeRules';
import { Route, Routes } from 'react-router-dom'

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
      }),[lightMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ResponsiveAppBar lightMode={lightMode} setLightMode={setLightMode}></ResponsiveAppBar>      
      <Routes>
        <Route path='/' element={<GameRoom />} />
        <Route path='/homerules' element={<HomeRules />} />
      </Routes> 
    </ThemeProvider>
  );
}

export default App;