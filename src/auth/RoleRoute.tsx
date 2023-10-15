import { PropsWithChildren } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PAGE_URL } from '../config';

type Props = {
  roles?: string[];
}

function RoleRoute({ children }: PropsWithChildren<Props>) {
  // const role = localStorage.getItem('role');
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!role && roles.length === 0) return;
  //   const checkRole = role ? roles.includes(role) : false;
  //   if (!checkRole && !roles.includes('*')) {
  //     navigate(PAGE_URL.ERROR_403, { replace: true });
  //   }
  // }, [role, roles]);

  return children;
}

export default RoleRoute;
