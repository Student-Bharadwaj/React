import React from "react";
import useTheme from "../context/Theme";
import ThemeButton from "./ThemeButton";
function Panel() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  let color;
  const className1 = "bg-" + themeMode;
  if (themeMode == "dark") {
    color = "light";
  } else {
    color = "dark";
  }
  const className2 = "text-"+color;
  const borderClass="border-"+color;
  const bgColor="bg-"+color;
  return (
    <div className={"border border-dark"+" "+"container "+" "+bgColor} >
<div className={className1 + " " + className2+" "+"border m-5"+" "+borderClass}>
      <div className="container  p-5 mb-1 ">
        <h1>useContext() real time Usage:</h1>
        <p>
          {" "}
          useContext() is a hook in react mostly used for setting ThemeModes to
          the page.
        </p>
        <p>
          Another usage is : it is used when you want to use or access the
          variables,states,functions down to the tree directly.
        </p>
      </div>
      <ThemeButton/>
    </div>
    </div>
    
  );
}

export default Panel;
