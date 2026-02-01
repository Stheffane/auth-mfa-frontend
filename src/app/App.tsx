import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppProviders } from './providers';
import { GlobalStyle } from '../shared/GlobalStyle';

export function App() {
  return (
    <AppProviders>
      <GlobalStyle />
      <RouterProvider router={router} />
    </AppProviders>
  );
}
