import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserContextProvider from './context/UserContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
)
