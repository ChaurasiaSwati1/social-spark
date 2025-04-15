import { NavLink } from 'react-router-dom';
import NavList from './NavList';
import NavToggle from './NavToggle';
import headerLogo from '../../assets/images/white_logo.jpg';
const Header = () => {
  return (
    <header className="py-3 bg-light shadow position-fixed w-100 header">
      <div className="container-md container-fluid ">
        <div className="row align-items-center">
          <div className="col-md-4 col">
            <NavLink to="/">
              <img src={headerLogo} alt="logo" height={45} width={106} />
            </NavLink>
          </div>
          <div className="col-md-8 col-auto">
            <NavList />
            <NavToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
