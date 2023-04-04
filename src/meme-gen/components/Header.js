import React  from "react";
import TrollFace from "../images/Troll Face.png";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function SlideToggle({ theme, darkMode, onChange }) {
  return (
    <Grid component="label" container alignItems="center" spacing={0.5}>
      <Grid item>Light</Grid>
      <Grid item>
        <ThemeProvider theme={theme}>
          <Switch checked={darkMode} onChange={onChange} value="darkMode" />
        </ThemeProvider>
      </Grid>
      <Grid item>Dark</Grid>
    </Grid>
  );
}

export default function Header(props){
  const {darkMode, onChange} = props


  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#222222",
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#FFFFFF",
            },
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.9,
            backgroundColor: "#FFFFFF",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.9,
              backgroundColor: "#FFFFFF",
            },
          },
        },
      },
    },
  });

  return (
    <header className="header">
      <nav
        style={{
          background: darkMode
            ? "#222222"
            : `linear-gradient(90deg, #672280 1.18%, #A626D3 100%)`,
        }}
        className="meme-nav"
      >
        <div className="img-display">
          <img src={TrollFace} alt="Should have img here" className="logo" />
          <div className="meme-title">Meme Generator</div>
          <div className="course">React Course - Project 3</div>
          <div className="toggle">
            <SlideToggle   theme={theme} darkMode={darkMode} onChange={onChange}  />
          </div>
        </div>
      </nav>
    </header>
  );


    // function SlideToggle({theme, darkMode, onChange}) {
    //   return (<Grid component="label" container alignItems="center" spacing={0.5}>
    //           <Grid item>Light</Grid>
    //           <Grid item>
    //             <ThemeProvider theme={theme}>
    //               <Switch checked={darkMode} onChange={onChange} value="darkMode" />
    //             </ThemeProvider>
    //           </Grid>
    //           <Grid item>Dark</Grid>
    //         </Grid>);
    // }
      
  }