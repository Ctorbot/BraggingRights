import './App.css';
import * as React from "react";
import SiteIcon from "./components/SiteIcon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from '@mui/material'
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
      <Paper>
        <SiteIcon/>
        <IconButton sx={{ ml: 1 }} onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Paper>
    </ThemeProvider>
  );
}

export default App;