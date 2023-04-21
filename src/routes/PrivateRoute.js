import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/authentication/authSelectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ redirectTo }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};
