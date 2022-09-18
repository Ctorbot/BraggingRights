import * as React from "react";
import { ThemeProvider } from '@mui/material'
import useColorMode from './SetColorMode'
import useTheme from './SetTheme'

export const ColorModeContext = React.createContext({ colorModeContextProvider: () => {}, mode: "light" });

export default function ColorModeContextProvider(props) {
    
  const [colorMode] = useColorMode();
  const [theme] = useTheme();

  return (
    <div>
        {props.children}
    </div>
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     {props.children}
    //   </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}