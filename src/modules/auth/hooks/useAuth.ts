import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export function useAuth() {
  const { state, dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function login(email: string, password: string) {
    dispatch({ type: 'LOGIN_START' });

    // mock temporário
    await new Promise((res) => setTimeout(res, 1000));

    if (email === 'mfa@user.com') {
      dispatch({ type: 'MFA_REQUIRED' });
      navigate('/mfa');
      return;
    }

    if (password)

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user: { id: '1', email },
        token: 'fake-token',
      },
    });

    navigate('/');
  }

  async function verifyMFA(code: string) {
    dispatch({ type: 'LOGIN_START' });

    await new Promise((res) => setTimeout(res, 1000));

    if (code !== '123456') {
      dispatch({ type: 'MFA_REQUIRED' });
      return;
    }

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user: { id: '1', email: 'mfa@user.com' },
        token: 'fake-token',
      },
    });

    navigate('/');
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
