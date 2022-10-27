import { NavLink } from 'react-router-dom';
import useWindowDimensions from 'helpers/useWindowDimensions';
import Btn from '../../components/ButtonMUI';
import { ReactComponent as HeaderLogo } from '../../assets/images/logo.svg';
import './header.scss';

const pages = [{ name: 'Marketplace', link: '/properties' }];

export const Header = () => {
  const { width } = useWindowDimensions();

  const handle = () => document.body.classList.toggle('mobile-menu-open');

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <HeaderLogo />
          </NavLink>
        </div>

        <nav className="menu">
          <ul>
            {pages.map(el => (
              <li>
                {width > 767 ? (
                  <NavLink to={el.link} className="menu-link">
                    {el.name}
                  </NavLink>
                ) : (
                  <NavLink onClick={handle} to={el.link} className="menu-link">
                    {el.name}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <Btn text="Log in" />
            </li>
          </ul>
        </nav>

        <button onClick={handle} className="burger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
