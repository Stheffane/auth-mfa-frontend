import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../modules/auth/pages/LoginPage';
import { MFAPage } from '../modules/auth/pages/MFAPage';
import { ProtectedPage } from '../modules/auth/pages/ProtectedPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/mfa',
    element: <MFAPage />,
  },
]);
