import { useNavigate } from 'react-router-dom';

import { PAGE_URL } from '../config';

function Login() {
  const navigate = useNavigate();

  function onLogin() {
    localStorage.setItem('token', 'tony');
    localStorage.setItem('role', 'admin');
    navigate(PAGE_URL.ROOT);
  }

  return (
    <div>
      Login

      <button type="button" onClick={onLogin}>Login</button>

    </div>
  );
}

export default Login;
