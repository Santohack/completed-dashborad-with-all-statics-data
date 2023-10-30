import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { colorModeContext, useMode } from "./theme";

import Dashboard from "./scenes/dashboard";
import NavSideBar from "./scenes/global/sidebar";
import TopBar from './scenes/global/topbar/index';

function App() {
  const [theme, colorMode] = useMode()
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div style={{display:'flex',position: 'relative'}}>
        <NavSideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element ={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>



  );
}

export default App;
