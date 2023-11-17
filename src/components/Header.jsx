import Button from './Button';
import LogoImg from '../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={LogoImg} alt="logo image" />
      <ul className="header_middle">
        <li>FLAVOURS</li>
        <li>FIND US</li>
        <li>ABOUT US</li>
        <li>FRANCHISE</li>
      </ul>
      <Button />
    </div>
  );
};

export default Header;
