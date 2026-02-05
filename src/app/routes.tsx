import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { MFAPage } from '../pages/MFAPage';
import { ProtectedPage } from '../pages/ProtectedPage';
import { ProtectedRoute } from '../shared/components/ProtectedRoute';
import { AuthLayout } from '../shared/components/AuthLayout';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/mfa',
        element: <MFAPage />,
      },
    ]
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <ProtectedPage />
      </ProtectedRoute>
    )
  },
]);
