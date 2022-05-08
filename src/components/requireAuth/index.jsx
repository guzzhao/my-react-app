import { Navigate, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';

import { userInfo } from '@/store/store_user';

function RequireAuth({ children }) {
  const [username] = useAtom(userInfo);

  let location = useLocation();
  if (username === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
