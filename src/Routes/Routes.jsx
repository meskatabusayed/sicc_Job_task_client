import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import DashbordLayout from "../Layout/DashbordLayout";
import ToDo from "../Dashboard/ToDo";
import CreateToDo from "../Dashboard/CreateToDo";
import Profile from "../Dashboard/Profile";
import PrivateRoute from "./PrivateRoute";
import Ongoing from "../Dashboard/Ongoing";
import CompleteTask from "../Dashboard/CompleteTask";
import UpdateTodo from "../components/ui/UpdateTodo";


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
          path: "todo",
          element: (
            <PrivateRoute>
              <ToDo />
            </PrivateRoute>
          ),
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "createtodo",
          element: <CreateToDo />,
        },
        {
          path: "ongoing",
          element: <Ongoing />,
        },
        {
          path: "completetask",
          element: <CompleteTask />,
        },
        {
          path: "updatetodo/:id",
          element: <UpdateTodo />,
        },
      ],
    },
   
  ]);