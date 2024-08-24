import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import Timeline from './Components/Timeline/index.jsx';
import Projects from './Components/Projects/index.jsx';
import Skills from './Components/skills/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:"/about",
    element : <Timeline/>
  },
  {
    path:"/projects",
    element : <Projects/>
  },
  { 
    path:"/skills",
    element: <Skills/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
