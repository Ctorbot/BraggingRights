// import './App.css';
// import NavBar from './components/Navbar';
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme, useTheme } from '@mui/material'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ColorModeContext = React.createContext({ colorModeContextProvider: () => {}, mode: "light" });

export default function useColorMode()
{
    const [mode, setMode] = React.useState("light");
    const colorMode = React.useMemo(
      () => ({
          colorModeContextProvider: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
        mode
      }),
      [mode]
    );
    return mode
} 
