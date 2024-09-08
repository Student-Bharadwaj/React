import React from "react";
import useTheme from "../context/Theme";
function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const handleClick = () => {
    themeMode == "light" ? darkTheme() : lightTheme();
  };
let color;
let mode;
if(themeMode=="dark"){
    color="light";
    mode="lightMode";
}else{
    color="dark";
    mode="darkMode";
}
  const cls1="btn border";
  const cls2="btn-"+color;

  return (
    <div>
      <button className={cls1+" "+cls2+" "+"mb-3"}  onClick={handleClick}>{mode}</button>
    </div>
  );
}

export default ThemeButton;
