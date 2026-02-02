import { useAuth } from '../modules/auth/hooks/useAuth';
import { ButtonAction } from '../shared/components/Button';
import { PageBody } from '../shared/components/PageBody';

export function LoginPage() {
  const { login, status } = useAuth();

  return (
    <PageBody>
      <h1>Login</h1>
      <ButtonAction onClick={() => login('mfa@user.com', '123')} variant='primary'>
        Login com MFA
      </ButtonAction>
      <ButtonAction onClick={() => login('user@test.com', '123')} variant='secondary'>
        Login sem MFA
      </ButtonAction>

      {status === 'loading' && <p>Loading...</p>}
    </PageBody>
  );
}
