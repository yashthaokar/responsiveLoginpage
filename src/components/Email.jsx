import React from "react";
import "./Email.jsx";
import { useState } from "react";
import "./PasswordStrength.css";

const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

const Email = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [state, setState] = useState({ backgroundColor: "#4285F4" });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const analyze = (event) => {
    if (strongRegex.test(event.target.value)) {
      setState({ backgroundColor: "#0F9D58" });
    } else if (mediumRegex.test(event.target.value)) {
      setState({ backgroundColor: "#F4B400" });
    } else {
      setState({ backgroundColor: "#DB4437" });
    }
  };

  return (
    <>
      <div className="container-input">
        <input
          id="message"
          name="message"
          value={message}
          placeholder="eg- jonh@gmail.com"
          onChange={handleChange}
        />

        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </div>

      <div className="container">
        <div style={{ backgroundColor: state.backgroundColor }}>
          <p>
            <input
              type="text"
              name="password"
              onChange={analyze}
              placeholder="Password"
            />
          </p>
        </div>
        <p className="forget_p">Forgot your password</p>
      </div>
      <div>
        <button className="btn">LOGIN</button>
        <p>
          Don't have an account ?<span>signUp</span>
        </p>
      </div>
    </>
  );
};

export default Email;
