import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './DesignSystem.css';
import '@naga-digital-resume/ui/styles.css';
// import'./App.css';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
