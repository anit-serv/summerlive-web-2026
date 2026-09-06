import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!
// 各HTMLに含めた検索・no-JS向け本文を、Reactの初回描画前に置き換える。
rootElement.replaceChildren()

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
