import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLogin } = useSelector((state) => state.auth);

  return isLogin ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
