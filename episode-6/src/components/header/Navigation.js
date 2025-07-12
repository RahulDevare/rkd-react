import { useState } from "react";

const Navigation = () => {
  const [btnName, setBtnName] = useState('Login');
  //let btn = btnName === 'Login' ? 'Login' : 'Logout';

  return (
    <nav className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
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