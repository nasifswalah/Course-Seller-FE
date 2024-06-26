import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/user/SignupPage';
import SigninPage from './pages/user/SigninPage';
import InstructorSignupPage from './pages/instructor/InstructorSignupPage';
import InstructorSigninPage from './pages/instructor/InstructorSigninPage';
import UserDashboardPage from './pages/user/UserDashboardPage';
import DashboardPage from './pages/instructor/DashboardPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user/signup",
    element: <div><SignupPage/></div>,
  },
  {
    path: "/user/signin",
    element: <div><SigninPage/></div>,
  },
  {
    path: "/instructor/signup",
    element: <div><InstructorSignupPage/></div>,
  },
  {
    path: "/instructor/signin",
    element: <div><InstructorSigninPage/></div>,
  },
  {
    path: "/user/dashboard",
    element: <div><UserDashboardPage/></div>,
  },
  {
    path: "/instructor/dashboard",
    element: <div><DashboardPage/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

