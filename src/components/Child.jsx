import React from 'react';

const Child = ({ onLogin }) => {
  return (
    <>
      {/* <h1>Parent Component</h1> */}
      {/* <label htmlFor="name">Username:</label> */}
      Username: <input type="text" id="name" />
      {/* <br /> */}
      {/* <label htmlFor="pass">Password:</label> */}
      Password: <input type="password" id="pass" />
      {/* <br /> */}
      <button onClick={()=>onLogin()}>Login</button>
    </>
  );
};

export default Child;
