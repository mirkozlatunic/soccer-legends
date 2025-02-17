import Navbar from './navbar';
import Button from './Button';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Navbar />
      <Button name="Sign In" />
      <Button name="Register" />
      <Button name="Sign Out" />
    </header>
  );
}

export default Header;
