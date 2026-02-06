export const SESSION_TIME = 15
const SESSION_KEY = 'session_expires_at';
const AUTH_KEY = 'auth_status';


// Session time
export function setSessionExpiration(seconds: number) {
  const expiresAt = Date.now() + seconds * 1000;
  localStorage.setItem(SESSION_KEY, String(expiresAt));
}

export function getSessionExpiration() {
  const value = localStorage.getItem(SESSION_KEY);
  return value ? Number(value) : null;
}

export function clearSessionExpiration() {
  localStorage.removeItem(SESSION_KEY);
}

// Status Persist
export function setAuthStatus(value: 'authenticated' | 'unauthenticated') {
  localStorage.setItem(AUTH_KEY, value);
}

export function getAuthStatus() {
  return localStorage.getItem(AUTH_KEY);
}

export function clearAuthStatus() {
  localStorage.removeItem(AUTH_KEY);
}
