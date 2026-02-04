import { useAuth } from '../modules/auth/hooks/useAuth';
import { ButtonAction } from '../shared/components/Button';
import { PageBody } from '../shared/components/PageBody';
import { BaseInput } from '../shared/components/PageBody/styles';

export function LoginPage() {
  const { login, status } = useAuth();

  return (
    <PageBody>
      <h1>Login</h1>

      <form>
        <label htmlFor="email">Email:</label>
        <BaseInput type="email" name="email-field" id="email" $hasError={false} $isSubmitting={false} />

        <label htmlFor="password">Password:</label>
        <BaseInput type="password" name="password-field" id="password" $hasError={false} $isSubmitting={false} />

        <ButtonAction onClick={() => login('mfa@user.com', '123')} variant='primary' >
          MFA Login
        </ButtonAction>
        <ButtonAction onClick={() => login('user@test.com', '123')} variant='secondary'>
          Login without MFA
        </ButtonAction>
      </form>

      {status === 'loading' && <p>Loading...</p>}
    </PageBody>
  );
}
