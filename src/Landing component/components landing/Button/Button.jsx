import React, { useState } from "react";
import "./style.css";

export const Button = ({ className, frameClassName, divClassName }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://your-backend-endpoint.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      console.log("SignUp successful:", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className={`button ${className}`} onClick={() => setIsFormVisible(true)}>
        <div className={`frame ${frameClassName}`}>
          <div className={`text-wrapper ${divClassName}`}>Sign up</div>
        </div>
      </button>
      
      {isFormVisible && (
        <div className="sign-up-modal">
          <div className="sign-up-content">
            <button onClick={() => setIsFormVisible(false)}>Close</button>
            <div className="container">
              <form className="sign-up-form" onSubmit={handleSignUp}>
                <h1>Create an account</h1>

                {error && <p className="error-message">{error}</p>}
                
                <div className="input-group">
                  <label htmlFor="email">Email address</label>
                  <input 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="example@email.com" 
                    type="email" 
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="password">Create a password</label>
                  <input 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password" 
                    type="password" 
                  />
                </div>
                <div className="input-group">
                <button className="sign-up-button2" type="submit" disabled={loading}>
                  {loading ? "Signing Up..." : "Create an account"}
                </button>
                </div>
             
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
