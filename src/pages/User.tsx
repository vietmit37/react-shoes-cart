/* eslint-disable no-console */
import React from 'react';
import { axiosInstance, IConfig } from '../services/axiosInstace';

function User() {
  async function fetchData() {
    const options: IConfig = {
      showSpinner: true,
    };
    const resUser = await axiosInstance('/user', options);
    const resPhoto = await axiosInstance('/photo', options);

    console.log('fetchData: ', {
      resUser,
      resPhoto,
    });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function handleFetch() {
    fetchData();
  }

  return (
    <div>
      User

      <button type="button" onClick={handleFetch}>fetch cancel</button>

    </div>
  );
}

export default User;
