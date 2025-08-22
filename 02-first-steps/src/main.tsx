import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstApp } from './FirstApp'
import { MyAwesomeApp } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstApp />
    <MyAwesomeApp />
  </StrictMode>,
)
