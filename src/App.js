import './App.css';
import NavBar from './components/Navbar';
import { default as ColorModeContextProvider, ToggleColorMode, ColorModeContext } from './components/ColorModeContext';
import useColorMode from './components/SetColorMode'
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from '@mui/material'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// export default function App() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <ThemeProvider theme={theme}>
//       <div sx={{ display: 'flex' }}>
//         <NavBar />
//         <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//           {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//         </IconButton>
//         <header>
          
//         </header>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState("light");
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       }
//     }),
//     []
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//           primary: {
//             main: "#F55D3E"
//           },
//           secondary: {
//             main: '#8A4F7D',
//           }
//         },
//         typography: {
//           fontFamily: 'Dosis',
//           fontWeightLight: 400,
//           fontWeightRegular: 500,
//           fontWeightMedium: 600,
//           fontWeightBold: 700
//         }
//       }),
//     [mode],
//   );

//   return (
//     <div>
//     <IconButton sx={{ ml: 1 }} onClick={ToggleColorMode} color="inherit">
//       {ToggleColorMode.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//     </IconButton>
//     </div>
//   );
// }

function App() {
  // const [colorMode] = useColorMode();
  return (
    <div sx={{ display: 'flex' }}>
      <header>
        <button>
          The color mode is 
        </button>
        {/* <IconButton sx={{ ml: 1 }} onClick={ColorModeContextProvider} color="inherit">
          {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton> */}
      </header>
    </div>
  );
}

export default App;