# Auth Flow with MFA (Frontend-focused)

This project demonstrates a **frontend-oriented authentication flow**
with **Multi-Factor Authentication (MFA)**, focusing on **architecture,
state management, and user flow**, rather than backend complexity.

## 🎯 Goal
Showcase how a frontend application can:
- Handle complex auth states
- Orchestrate MFA flows
- Protect routes in a SPA
- Remain scalable and maintainable

## 🧱 Tech Stack
- React 18
- TypeScript
- Vite
- React Router
- Context + Reducer

## 🔐 Authentication Flow
1. User attempts to access a protected route
2. Redirected to login
3. Credentials are validated
4. MFA step is required (when applicable)
5. After MFA verification, user is redirected to the original route

## 🧠 Architectural Decisions
- **Frontend-first approach**: backend is mocked to focus on UI logic
- **Explicit auth states**: avoids implicit boolean flags
- **Modular architecture**: auth logic isolated from UI
- **Protected routes with redirect memory**

## 🧪 Mocked Backend
API calls are mocked to simulate:
- Network latency
- MFA-required responses
- Invalid MFA codes

## 🚀 What could be added next
- Real backend integration
- Refresh token rotation
- Persisted sessions
- Automated tests
