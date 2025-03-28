import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrivacyPolicy from './Terminos'
import MyProfile from './Profile'
import ProjectCredits from './Creditos'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProfile />
  </StrictMode>,
)
