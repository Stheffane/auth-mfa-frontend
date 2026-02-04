import { useState } from 'react';
import { useAuth } from '../modules/auth/hooks/useAuth';
import { ButtonAction } from '../shared/components/Button';
import { PageBody } from '../shared/components/PageBody';
import { BaseInput } from '../shared/components/PageBody/styles';

type FieldState = {
  touched: boolean;
  error: boolean;
};

export function LoginPage() {
  const { login, status } = useAuth();

  const [email, setEmail] = useState<FieldState>({ touched: false, error: false });
  const [password, setPassword] = useState<FieldState>({ touched: false, error: false });
  const isFormValid = !(
    email.touched &&
    password.touched &&
    !email.error &&
    !password.error
  );

  function validatePassword(password: string) {
    const isPasswordValid = password.length >= 8;

    setPassword({ touched: true, error: !isPasswordValid });
  }

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

    const isEmailValid = emailRegex.test(email);
    setEmail({ touched: true, error: !isEmailValid });
  }

  return (
    <PageBody>
      <h1>Login</h1>

      <form>
        <label htmlFor="email">Email:</label>
        <BaseInput
          type="email"
          name="email-field"
          id="email"
          autoComplete="userName"
          $hasError={email.error}
          $isSubmitting={false}
          onBlur={(e) => validateEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <BaseInput
          type="password"
          name="password-field"
          id="password"
          autoComplete="current-password"
          minLength={8}
          maxLength={12}
          $hasError={password.error}
          $isSubmitting={false}
          onBlur={(e) => validatePassword(e.target.value)}
        />

        <ButtonAction type="button" disabled={isFormValid} onClick={() => login('mfa@user.com', '123')} variant='primary' >
          MFA Login
        </ButtonAction>
        <ButtonAction type="button" disabled={isFormValid} onClick={() => login('user@test.com', '123')} variant='secondary'>
          Google Login
        </ButtonAction>
      </form>

      {status === 'loading' && <p>Loading...</p>}
    </PageBody>
  );
}
