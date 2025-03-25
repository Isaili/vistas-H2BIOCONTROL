import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrivacyPolicy from './Terminos'
import MyProfile from './Profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProfile />
  </StrictMode>,
)
