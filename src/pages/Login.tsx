import { useNavigate } from 'react-router-dom';

import { PAGE_URL } from '../config';
import { axiosInstance, IConfig } from '../services/axiosInstace';

function Login() {
  const navigate = useNavigate();

  async function onLogin() {
    const options: IConfig = {
      showSpinner: true,
      method: 'POST',
      data: {
        data: {
          email: 'tony@gmail.com',
          password: '123456',
        },
      },
    };
    const res = await axiosInstance('/user/login', options);
    localStorage.setItem('access_token', res.data.data.access_token);
    localStorage.setItem('refresh_token', res.data.data.refresh_token);
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
