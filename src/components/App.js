
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Child onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
