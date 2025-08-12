import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Practice } from './Practice'
// import './index.css'

// M1: ***default creation***
// import App from './App.jsx';// this req : export default function funtnName()

// M2: : this req ***Arrow function***
// import { App } from './App.jsx'; // Notice 
/// (By adding the curly braces around App,
//  you are importing the { App } from the App component as a **Named import**, 
// which matches the export const App statement in App.jsx)



createRoot(document.getElementById('root')).render(
  // 
  // <StrictMode> //When you wrap your app with <StrictMode>, React will run your components twice:
  // Once in "strict mode" to detect any potential issues.
  // Again in "normal mode" to render the actual UI.

    // <App />
    <Practice/>
  // </StrictMode>,,.
)
