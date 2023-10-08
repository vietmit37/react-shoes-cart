import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { PAGE_URL } from '../config';

type IResponseToken = {
  data: {
    token: string;
  }
}

function Login() {
  const navigate = useNavigate();

  async function onLogin() {
    // localStorage.setItem('token', 'tony');
    // localStorage.setItem('role', 'admin');
    const res: IResponseToken = await axios('https://tony-auth-express-cmylpcdza-nhattruong1811-gmailcom.vercel.app/api/user/login', {
      method: 'POST',
      data: {
        email: 'tony@gmail.com',
        password: '123456',
      },
    });

    localStorage.setItem('token', res.data.token);
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
