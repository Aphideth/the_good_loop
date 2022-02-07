import SearchBar from '../components/SearchBar';
import '../styles/header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex flex-row justify-between justify-items-center content-start items-start pt-5 pl-5 pr-5">
            <Link to="/">
              <img className="header_img" src={logo} alt="logo" />
            </Link>
            <li>
              <Link to="/participate">Participer</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <p className="textHeader">
          Les marques qui se soucient de <br />
          la pla<span className="Headercircle yellow "></span>nète, des hum
          <span className="Headercircle blue "></span>ains, des anima
          <span className="Headercircle green "></span>ux,
          <br />
          et de toi.
        </p>
        <SearchBar />
        <p className="line"></p>
      </header>
    </>
  );
};

export default Header;
