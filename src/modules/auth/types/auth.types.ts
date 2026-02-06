export type AuthStatus =
  | 'loading'
  | 'unauthenticated'
  | 'loading'
  | 'mfa_required'
  | 'authenticated'
  | 'session_expired';

export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  status: AuthStatus;
  user: User | null;
  accessToken: string | null;
}
