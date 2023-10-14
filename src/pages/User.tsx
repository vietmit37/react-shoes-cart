import React from 'react';
import { axiosInstance, IConfig } from '../services/axiosInstace';

function User() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      const options: IConfig = {
        showSpinner: true,
      };
      const res = await axiosInstance('/user', options);
      setUsers(res.data.data);
    }

    fetchUsers();
  }, []);

  console.log('users: ', users);
  return (
    <div>User</div>
  );
}

export default User;
