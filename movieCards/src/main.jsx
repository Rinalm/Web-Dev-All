import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Practice } from './Practice'
import './index.css'
// M1: ***default creation***
// import App from './App.jsx';// this req : export default function funtnName()
// M2: : this req ***Arrow function***
import { App } from './App.jsx'; //  App component as a **Named import**, 



createRoot(document.getElementById('root')).render(
  <StrictMode> 
  

    <App />
    {/*  <Practice/> */}


  </StrictMode>
)
