import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '@components/Header';
import { PAGE_URL } from '../../config';

type IProps = {
}

type IResponseUser = {
  data: {
    user: any
  }
}

function MainLayout({ children }: PropsWithChildren<IProps>) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) return;

    async function checkUser() {
      try {
        const res: IResponseUser = await axios('https://tony-auth-express-cmylpcdza-nhattruong1811-gmailcom.vercel.app/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });
        const data = res.data.user;
        console.log('data: ', data);
        // set user into redux or context
      } catch (error: any) {
        const status = error?.response?.status;
        const isSuccess = error?.response?.data.isSuccess;
        if (status === 400 && !isSuccess) {
          localStorage.removeItem('token');
          navigate(PAGE_URL.LOGIN, { replace: true });
        }
      }
    }
    checkUser();
  }, [token]);

  return (
    <>
      <Header />
      <div className="mainContainer">
        {children}
      </div>
    </>
  );
}

export default MainLayout;
