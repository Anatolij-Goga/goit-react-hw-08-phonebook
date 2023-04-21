import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/authentication/authOperations';

const HomeView = lazy(() => import('../pages/HomePage'));
const ContactsView = lazy(() => import('../pages/ContactsPage'));
const RegisterView = lazy(() => import('../pages/RegisterPage'));
const LoginView = lazy(() => import('../pages/LoginPage'));
const PublicRoute = lazy(() => import('../routes/PublicRoute'));
const PrivateRoute = lazy(() => import('../routes/PrivateRoute'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Navigate to="register" />} />
        <Route path="/" element={<Navigate to="register" />} />
        <Route path="/" element={<HomeView />}>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="register" element={<RegisterView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="login" element={<LoginView />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="login" />}>
            <Route path="contacts" element={<ContactsView />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
