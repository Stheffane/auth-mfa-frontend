import type { User } from "../types/auth.types";

export type LoginSuccessResponse = {
  user: User;
  token: string;
};

export type LoginMfaRequiredResponse = {
  mfaRequired: true;
};

export type LoginResponse =
  | LoginSuccessResponse
  | LoginMfaRequiredResponse;

export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  await new Promise((res) => setTimeout(res, 1000));

  if (email === 'mfa@user.com' && password) {
    return { mfaRequired: true };
  }

  return {
    user: { id: '1', email },
    token: 'fake-token',
  };
}

export async function verifyMfaApi(code: string) {
  await new Promise((res) => setTimeout(res, 1000));

  if (code !== '123456') {
    throw new Error('INVALID_MFA_CODE');
  }

  return {
    user: { id: '1', email: 'mfa@user.com' },
    token: 'fake-token',
  };
}
