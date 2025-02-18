import ButtonHeader from './Button';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        <ButtonHeader name="Sign In" />
        <ButtonHeader name="Register" />
        <ButtonHeader name="Sign Out" />
      </div>
    </nav>
  );
}

export default Navbar;
