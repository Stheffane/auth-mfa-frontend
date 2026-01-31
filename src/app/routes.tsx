import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../modules/auth/pages/LoginPage';
import { MFAPage } from '../modules/auth/pages/MFAPage';
import { ProtectedPage } from '../modules/auth/pages/ProtectedPage';
import { ProtectedRoute } from '../shared/components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <ProtectedPage />
      </ProtectedRoute>
    ) 
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
