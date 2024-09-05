import React, { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Signup() {
  let [generatorVisible, setGeneratorVisible] = useState(false);
  let [user, setUser] = useState("");
  let [eye, setEye] = useState(false);
  const handleGenerator = () => {
    setGeneratorVisible(!generatorVisible);
  };
  return (
    <div>
      <div className="container text-center">
        <h2>Signup Page</h2>
        <form action="">
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            id="username"
            value={user}
            placeholder="username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password" className="mt-3">
            Password
          </label>
          <br />
          <input type={eye ? "text" : "password"} id="password" />
          {eye ? (
            <VisibilityOffIcon
              onClick={() => {
                setEye(!eye);
              }}
            />
          ) : (
            <VisibilityIcon
              onClick={() => {
                setEye(!eye);
              }}
            />
          )}
          <br />
          <button className="btn btn-danger mt-4">Sign up</button>
        </form>

        <button className="btn btn-primary mt-5 mb-5" onClick={handleGenerator}>
          Password Generator
        </button>
        <span className="fs-6"> (relevant to your username)</span>
      </div>
      {generatorVisible ? (
        <PasswordGenerator hint={user} />
      ) : (
        <div className="container text-center fs-2">
          {" "}
          Press above button for generating a password !{" "}
        </div>
      )}
    </div>
  );
}

export default Signup;
