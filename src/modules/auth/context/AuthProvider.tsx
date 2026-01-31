import { type ReactNode, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import {
  authReducer,
  initialAuthState,
} from './auth.reducer';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
