import { Link, useNavigate } from 'react-router-dom';

import { PAGE_URL } from '../config';
import Button from './Button';

function Header() {
  const navigate = useNavigate();

  function onLogout() {
    navigate(PAGE_URL.LOGIN);
  }

  return (
    <div className="header">
      <ul>
        <li>
          <Link to={PAGE_URL.ROOT}>Home</Link>
        </li>
        <li>
          <Link to={PAGE_URL.USER}>User</Link>
        </li>
        <li>
          <Link to={PAGE_URL.ABOUT}>About</Link>
        </li>
      </ul>
      <div className="button_logout">
        <div className="shopItem_bottom">
          <Button buttonText="Logout" onClick={() => onLogout()} />
        </div>
      </div>
    </div>
  );
}

export default Header;
