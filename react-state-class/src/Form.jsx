import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    setFormData((currData) => {
      currData[fieldName] = event.target.value;
      return { ...currData };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData((currData) => {
      currData = {
        fullname: "",
        username: "",
        password: "",
      };
      return { ...currData };
    });
  };

  return (
    <form action="">
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        placeholder="enter some text"
        id="fullname"
        name="fullname"
        value={formData.fullname}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        placeholder="enter username"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="enter password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
