import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import DashbordLayout from "../Layout/DashbordLayout";
import Dashboard from "../Dashboard/Dashboard";
import ToDo from "../Dashboard/ToDo";
import CreateToDo from "../Dashboard/CreateToDo";
import Profile from "../Dashboard/Profile";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'signin',
            element: <SignIn></SignIn>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashbordLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "todo",
          element: <ToDo />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "createtodo",
          element: <CreateToDo />,
        },
      ],
    },
   
  ]);