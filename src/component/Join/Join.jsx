import React from "react";
import "./Join.css";
import logo from "../../images/imgLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

let user;
const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

// Login Container Of Chat App
const Join = () => {
  const [name, setName] = useState("");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>QUICK CHAT-APP</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="joinInput"
          placeholder="Enter Your Name"
        />
        <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/chat">
          {" "}
          <button onClick={sendUser} className="joinBtn">
            LogIn
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
