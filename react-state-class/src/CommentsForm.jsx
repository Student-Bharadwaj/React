import { useState } from "react";

import {useFormik} from "formik";

export default function CommentsForm({addComment}) {
  let [formData, setFormData] = useState({
    username: "",
    comments: "",
    rating: 5,
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
addComment(formData);
    setFormData({
      username: "",
      comments: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h2>give a comment:</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          placeholder="Leave a comment"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          name="rating"
          id="rating"
          min={1}
          max={5}
          placeholder="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
