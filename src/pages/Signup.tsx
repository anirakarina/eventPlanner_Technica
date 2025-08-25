import { useState } from "react";
import { signupWithEmail, loginWithSlack } from "../services/auth";
import {Link} from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    signupWithEmail(email, password);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleEmailSignup}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <p id="error" style={{color: "red"}}></p>

      <hr />
      <button onClick={loginWithSlack}>
        Sign Up with Slack
      </button>
      <p>Already have an account? <span><Link to="/Login">Login</Link></span></p>
    </div>
  );
}
