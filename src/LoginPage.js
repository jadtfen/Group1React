import React, { useState } from 'react';  // Importing React and the useState hook
import './LoginPage.css';  // Importing the CSS file to style the page

// LoginPage component
const LoginPage = () => {
  // Declaring state variables for username and password with their setter functions
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');

  // Function that handles the login when the form is submitted
  const handleLogin = (e) => {
    e.preventDefault();  // Preventing the default form submission behavior
    console.log('Logging in with:', { username, password });  // Outputting the username and password to the console
  };

  // Returning JSX for the login page
  return (
    <>
      {/* Title bar of the page */}
      <div className="title-bar">TITLE OF WEBSITE</div>
      
      {/* Container for the login form */}
      <div className="login-container">
        
        {/* Header for the login section */}
        <div className="login-header">LOGIN</div>
        
        {/* Form element, which will trigger the handleLogin function on submit */}
        <form onSubmit={handleLogin}>
          
          {/* Input group for the username field */}
          <div className="input-group">
            <label>Username</label>  {/* Label for the username input */}
            
            {/* Input field for the username */}
            <input
              type="text"
              placeholder="Enter username"
              value={username}  // Binding the input field's value to the username state
              onChange={(e) => setUsername(e.target.value)}  // Updating username state on input change
              className="input-field"  // Applying CSS class for styling
            />
          </div>

          {/* Input group for the password field */}
          <div className="input-group">
            <label>Password</label>  {/* Label for the password input */}
            
            {/* Input field for the password */}
            <input
              type="password"
              placeholder="Enter password"
              value={password}  // Binding the input field's value to the password state
              onChange={(e) => setPassword(e.target.value)}  // Updating password state on input change
              className="input-field"  // Applying CSS class for styling
            />
          </div>

          {/* Submit button for logging in */}
          <button type="submit" className="login-button">LOGIN</button>  {/* Button to trigger form submission */}
        </form>
      </div>
    </>
  );
};

// Exporting the LoginPage component to be used in other parts of the application
export default LoginPage;
