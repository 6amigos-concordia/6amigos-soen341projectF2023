import React, { useState } from "react";
import "./style.css";

export const Button = ({ className, frameClassName, divClassName }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("BROKER"); // Default userType
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, userType, password }), // Include name and userType
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
      <button
        className={`button ${className}`}
        onClick={() => setIsFormVisible(true)}
      >
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
                  <label htmlFor="name">Full Name</label>
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
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    type="email"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>User Type</label>
                  <div className="user-type-radio">
                    <label>
                      <input
                        type="radio"
                        value="BROKER"
                        checked={userType === "BROKER"}
                        onChange={() => setUserType("BROKER")}
                      />
                      Broker
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="BUYER"
                        checked={userType === "BUYER"}
                        onChange={() => setUserType("BUYER")}
                      />
                      Buyer
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="ADMIN"
                        checked={userType === "ADMIN"}
                        onChange={() => setUserType("ADMIN")}
                      />
                      Admin
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="RENTER"
                        checked={userType === "RENTER"}
                        onChange={() => setUserType("RENTER")}
                      />
                      Renter
                    </label>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="password">Create a password</label>
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
