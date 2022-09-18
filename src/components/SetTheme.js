// import './App.css';
// import NavBar from './components/Navbar';
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from '@mui/material'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useColorMode from './SetColorMode'

export default function useTheme()
{
    const [colorMode] = useColorMode();
    const [theme, setTheme] = React.useState();
    setTheme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode: colorMode,
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
        }),
      [colorMode],
    );
}
