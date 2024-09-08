import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import Panel from "./components/Panel";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [themeMode,setThemeMode]=useState("light");
  const lightTheme=()=>{
  setThemeMode("light");
  }
  const darkTheme=()=>{
  setThemeMode("dark");
  }

  // actual change in theme.
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return(
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <Panel/>
    {/* <ThemeButton/> */}
  </ThemeProvider>
 
  )
}

export default App;
