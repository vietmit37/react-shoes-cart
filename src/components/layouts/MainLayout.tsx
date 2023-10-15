import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@components/Header';
import { PAGE_URL } from '../../config';
import { axiosInstance } from '../../services/axiosInstace';

type IProps = {
}

function MainLayout({ children }: PropsWithChildren<IProps>) {
  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) return;

    async function checkUser() {
      const res = await axiosInstance.post('/auth');
      console.log('data: ', res);
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
