import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { getUserEmail } from 'redux/authentication/authSelectors';
import { logout } from 'redux/authentication/authOperations';

export const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <>
      <Typography sx={{ mr: 2 }}>{userEmail ? userEmail : null}</Typography>
      <Button onClick={() => dispatch(logout())} color="inherit">
        Logout
      </Button>
    </>
  );
};
