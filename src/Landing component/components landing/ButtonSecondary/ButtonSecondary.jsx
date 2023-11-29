import React, { useState } from "react";
import "./style.css";

export const ButtonSecondary = ({ className, frameClassName, divClassName }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState(""); // Change to "name" instead of "email"
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://your-backend-endpoint.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password }) // Change to "name" instead of "email"
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      console.log("SignIn successful:", data);
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
          <div className={`text-wrapper ${divClassName}`}>Sign In</div>
        </div>
      </button>
      
      {isFormVisible && (
        <div className="sign-in-modal">
          <div className="sign-in-content">
            <button onClick={() => setIsFormVisible(false)}>Close</button>
            <form className="sign-in-form" onSubmit={handleSignIn}>
              <h1>Sign In to your account</h1>
              {error && <p className="error-message">{error}</p>}
              <div className="input-group">
                <label htmlFor="name">Full Name</label> {/* Change to "Full Name" */}
                <input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="John Doe" 
                  type="text" 
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  type="password" 
                  required
                />
              </div>
              <div className="input-group">
                <button className="sign-in-button" type="submit" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
