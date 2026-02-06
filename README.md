# 🔐 Auth Flow with MFA (Frontend-focused)

Frontend application built with React + TypeScript to demonstrate a complete authentication flow with Multi-Factor Authentication (MFA), protected routes and session control.

- Login flow with email/password validation  
- MFA verification using 6-digit code  
- Protected routes with automatic session timeout  
- Automatic logout and redirect on session expiration  
- Persistent animated background using Router Layout  
- Clean and scalable folder structure

## ✦ Tech Stack
- `React` 
- `TypeScript`
- `Vite`
- `React Router`
- `Context + Reducer`
- `Styled Components`

## ✦ Authentication Flow
1. User attempts to access a protected route
2. Redirected to login
3. Credentials are validated
4. MFA step is required (when applicable)
5. After MFA verification, user is redirected to the original route

## ✦ Architectural Decisions
- **React Router layouts** were used to persist UI elements across authentication routes
- **Custom hooks** (useAuth, useMFA) encapsulate business logic and side effects
- **Presentational components** are kept decoupled from authentication logic.
- **Session timeout** is handled via a reusable countdown timer component.

## ✦ Session Behavior

- Authentication state is persisted across page reloads
- Session expiration is validated on app bootstrap
- Expired sessions automatically trigger logout and redirect
- Protected routes remain inaccessible after refresh if the session is invalid

## ✦ Project Structure
```
src/
 ├── app/               # App bootstrap, providers and routes
 ├── modules/           # Auth domain (hooks, context, reducers)
 ├── pages/             # Application pages (Login, MFA, Protected)
 ├── shared/            # Reusable components and layouts
 ├── styles/            # Global styles and theme
```
<br />

---

## ✦ Running the project
```bash
npm install
npm run dev
```
### ⪼ Demo Credentials
This project uses mocked authentication for demonstration purposes.

- **Email:** any valid email format
- **Password:** any non-empty value with at least 8 characters
- **MFA Code:** `123456`

### ⪼ Preview
<p align="center">
  <img src="./preview/auth-flow.gif" width="800" alt="Auth Flow Demo" />
</p>

<br />
  
---

## Scope Disclaimer
This project focuses on **frontend architecture and authentication flow**.
There is no backend integration — authentication, MFA validation and tokens are mocked to highlight:
- state management
- routing guards
- session handling
- UI/UX behavior
- clean architecture
- separation of concerns
- React best practices

##### Production Considerations
In a real-world scenario, this project is ready to be extended with:
- JWT + refresh token flow
- HttpOnly cookies
- Server-side MFA validation
- Role-based access control
