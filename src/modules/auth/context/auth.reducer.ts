import type { AuthState, User } from "../types/auth.types";


export type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_ACTIVATED'; payload: { user: User; token: string } }
  | { type: 'MFA_REQUIRED' }
  | { type: 'LOGOUT' }
  | { type: 'SESSION_EXPIRED' };

export const initialAuthState: AuthState = {
  status: 'loading',
  user: null,
  accessToken: null,
};

export function authReducer(
  state: AuthState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, status: 'loading' };

    case 'MFA_REQUIRED':
      return { ...state, status: 'mfa_required' };

    case 'LOGIN_SUCCESS':
    case 'LOGIN_ACTIVATED':
      return {
        status: 'authenticated',
        user: action.payload.user,
        accessToken: action.payload.token,
      };

    case 'SESSION_EXPIRED':
    case 'LOGOUT':
      return {
        status: 'unauthenticated',
        user: null,
        accessToken: null,
      };

    default:
      return state;
  }
}
