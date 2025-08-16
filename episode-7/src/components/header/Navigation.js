import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [btnName, setBtnName] = useState('Login');
  //let btn = btnName === 'Login' ? 'Login' : 'Logout';

  // use hook to run side effects in functional components
  // If no dependencies are passed to useEffect, it will run on every render
  // If an empty array is passed, it will run only once when the component mounts
  // If an array with dependencies is passed eg [btnName], it will run when btnName changes
  useEffect(() => {
    console.log("Navigation component mounted - useEffect called");
  }, [btnName]); // This will run every time btnName changes

  return (
    <nav className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li><button className="login-button" onClick={() => {
          // Below will not toggle the button text as it does not re-render the component
          //btn = btnName === 'Login' ? 'Logout' : 'Login';
          btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
        }}>{btnName}</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;