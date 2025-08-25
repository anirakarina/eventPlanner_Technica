import { useState, useEffect } from "react";
import { loginWithEmail, loginWithSlack } from "../services/auth";
import { handleSlackRedirect } from "../services/slackAuth";
import {Link} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    handleSlackRedirect();
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    loginWithEmail(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p id="error" style={{color: "red"}}></p>
      
      <hr />
      <button onClick={loginWithSlack}>
        Login with Slack
      </button>
      <p>Need to sign up? <span><Link to="/">Sign up</Link></span></p>
    </div>
  );
}
