import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from '../../assets/images/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/Facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/Twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <div className="logo">
            <Link to="/">
              <FooterLogo />
            </Link>
          </div>
          <div className="descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
          <div className="socials">
            <a href="/" target="_blank" rel="noindex nofollow noreferrer">
              <Facebook />
            </a>
            <a href="/" target="_blank" rel="noindex nofollow noreferrer">
              <Twitter />
            </a>
            <a href="/" target="_blank" rel="noindex nofollow noreferrer">
              <Instagram />
            </a>
            <a href="/" target="_blank" rel="noindex nofollow noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="column menu">
          <div className="menu-group">
            <h3 className="menu-group-title">Our Company</h3>
            <ul className="menu-group-list">
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="menu-group">
            <h3 className="menu-group-title">Terms</h3>
            <ul className="menu-group-list">
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Сonditions</a>
              </li>
              <li>
                <a href="/">All cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">© 2022 . All rights reserved.</div>
      </div>
    </footer>
  );
};
