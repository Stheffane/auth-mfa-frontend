import { createContext } from 'react';
import type { AuthAction } from './auth.reducer';
import type { AuthState } from '../types/auth.types';

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);
