import React, { useState } from "react";

import axios from "axios";
import './rg.css';

const Registration = ({ onRegister }) => {

  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
    
      const response = await axios.post("http://192.168.0.138:4446/api/register", {
        age,
        email,
        password,
      });

      onRegister(response.data);
     
    } catch (error) {
     
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="regist">
          <h4>Registration</h4>
      <form onSubmit={handleRegister}>
      <div className="text_area">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="text_area">
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        </div>
        <div className="text_area">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className="btn" type="submit">
          Register
        </button>
        <div className="log"><a href="/Login">Login Here</a></div>
  
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Registration;