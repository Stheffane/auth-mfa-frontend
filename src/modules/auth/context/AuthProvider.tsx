import { type ReactNode, useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import {
  authReducer,
  initialAuthState,
} from './auth.reducer';
import { getAuthStatus, getSessionExpiration } from '../../../shared/utils/session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const expiresAt = getSessionExpiration();
    const authStatus = getAuthStatus();

    if (
      authStatus === 'authenticated' &&
      expiresAt &&
      Date.now() < expiresAt
    ) {
      dispatch({
        type: 'LOGIN_ACTIVATED',
        payload: {
          user: {
            id: '1', email: 'mfa@user.com',
          },
          token: 'fake-token',
        }
      })
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
