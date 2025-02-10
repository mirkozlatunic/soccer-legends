import Navbar from './navbar';
import Button from './Button';

function Header() {
  return (
    <header>
      <Navbar />
      <Button name="Sign In" />
      <Button name="Register" />
      <Button name="Sign Out" />
    </header>
  );
}

export default Header;
