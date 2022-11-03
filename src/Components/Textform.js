import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(text.toUpperCase());
  };
  const convertLower = () => {
    setText(text.toLowerCase());
  };
  const clear = () => {
    setText("");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="m-3">
          <h1>{props.heading}</h1>
          <textarea
            type="email"
            className="form-control"
            value={text}
            rows="8"
            onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <div className="mb-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Convert to upper
            </button>
          </div>
          <div className="mb-2">
            <button type="submit" className="btn btn-primary" onClick={clear}>
              Clear
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={convertLower}
          >
            Convert to lower
          </button>
        </div>
      </div>
      <div className="container">
        <div className="m-3">
          <h2>Your text summary</h2>
          Characters: {text.length + " "}
          Words: {text.split(" ").length}
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
