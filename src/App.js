import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { colorModeContext, useMode } from "./theme";

import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/sidebar";
import TopBar from './scenes/global/topbar/index';

function App() {
  const [theme, colorMode] = useMode()
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <>
        <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element ={<Dashboard />} />
            </Routes>
          </main>
        </>
      </ThemeProvider>
    </colorModeContext.Provider>



  );
}

export default App;
