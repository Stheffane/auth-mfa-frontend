import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { MFAPage } from '../pages/MFAPage';
import { ProtectedPage } from '../pages/ProtectedPage';
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
