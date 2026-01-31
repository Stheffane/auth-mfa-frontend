import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';
import { loginApi, verifyMfaApi } from '../api/auth.api';

export function useAuth() {
  const { state, dispatch } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo =
    (location.state as { from?: string })?.from || '/';

  async function login(email: string, password: string) {
    dispatch({ type: 'LOGIN_START' });

    const response = await loginApi(email, password)

    if ('mfaRequired' in response) {
      dispatch({ type: 'MFA_REQUIRED' });
      navigate('/mfa');
      return;
    }

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response,
    });

    navigate(redirectTo);
  }

  async function verifyMFA(code: string) {
    dispatch({ type: 'LOGIN_START' });

    const response = await verifyMfaApi(code);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response,
    });

    navigate(redirectTo);
  }

  function logout() {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  }

  return {
    status: state.status,
    user: state.user,
    login,
    verifyMFA,
    logout,
  };
}
