import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import UserContextProvider from './context/UserContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
)
