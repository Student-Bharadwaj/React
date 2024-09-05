import React, { useCallback, useEffect, useRef, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
function PasswordGenerator({ hint }) {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let[alphaAllowed,setAlphaAllowed]=useState(false);
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [copy, setCopy] = useState(false);

  let passwordRef = useRef(null);

  const generatePassKey = useCallback(() => {
    let str = "*-+`~|";
    let pass = hint;

    if(alphaAllowed){
      let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      str+=alpha;
    }

    if (numAllowed) {
      let num = "1234567890";
      str += num;
    }
    if (charAllowed) {
      let specialChar = "{}()':;><?!@#$";
      str += specialChar;
    }

    for (let i = 1; i <= length; i++) {
      let ranNum = Math.floor(Math.random() * str.length + 1);
      let char = str.charAt(ranNum);

      pass += char;
    }
    setPassword(pass);
    setCopy(false);
  }, [length, numAllowed, charAllowed,alphaAllowed, setPassword]);

  const handleCopy = () => {
    setCopy(!copy);
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="container ">
      <div className="row text-center " style={{ marginLeft: "250px" }}>
        <input
          style={{ width: "45%" }}
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button
          className="btn btn-info  "
          style={{ width: "10%", marginLeft: "1rem" }}
          onClick={handleCopy}
        >
          Copy {copy && <CheckIcon style={{ fontSize: "small" }} />}
        </button>
      </div>
      <div className=" mt-3 row ">
        <label htmlFor="range" className="fs-5 text-left">
          Select the range of characters you want for your Key excluding the
          username:
        </label>
        <input
          type="range"
          id="range"
          min={5}
          max={25}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <span className="fs-2">Length ({length}) </span>
        <div>
        <label htmlFor="alphabets" style={{ marginRight: "1rem" }}>
            Do you want Alphabets in your Key?
          </label>
          <input
            type="checkbox"
            id="alphabets"
            onClick={() => {
              setAlphaAllowed(!alphaAllowed);
            }}
          />
          <label htmlFor="number" style={{ marginRight: "1rem" }}>
            Do you want number's in your Key?
          </label>
          <input
            type="checkbox"
            id="number"
            onClick={() => {
              setNumAllowed(!numAllowed);
            }}
          />
        </div>
        <div>
          <label htmlFor="char" style={{ marginRight: "1rem" }}>
            Do you want special character's in your Key?
          </label>
          <input
            type="checkbox"
            id="char"
            onClick={() => {
              setCharAllowed(!charAllowed);
            }}
          />
        </div>
      </div>
      <div className="row mt-2 " style={{ marginLeft: "500px" }}>
        <button
          className="btn btn-dark "
          style={{ width: "20%" }}
          onClick={generatePassKey}
        >
          {" "}
          Generate{" "}
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
