import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Benefits from './pages/Benefits';
import RequiredTasks from './pages/RequiredTasks'
import Resources from './pages/Resources';
import TimeOff from "./pages/TimeOff";
import HR from './pages/HR';
import DocumentLibrary from './pages/DocumentLibrary';
import EnrollmentSummary from './pages/EnrollmentSummary';
import LifeEvents from './pages/LifeEvents';
import TotalCompensationStatement from './pages/TotalCompensationStatement';

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <unauthenticated>
             <Root />
        </unauthenticated>
      )
     ,
      children: [
        
        {
         index:true,
         element:(
          
              <Home />
          
         ) ,
         
        },
        {
          path: "/profile", 
          element: <Profile />,
        },
        {
          path: "/benefits", 
          element: <Benefits />,
        },
        {
          path: "/required-tasks", 
          element: <RequiredTasks />,
        },

        {
          path: "/resources", 
          element: <Resources />,
        },
        {
          path: "/time-off", 
          element: <TimeOff />,
        },
        {
          path: "/documentlibrary", 
          element: <DocumentLibrary/>,
        },
        {
          path: "/enrollmentsummary", 
          element: <EnrollmentSummary/>,
        },
        {
          path: "/lifeevents", 
          element: <LifeEvents />,
        },
        {
          path: "/totalcompensation", 
          element: <TotalCompensationStatement/>,
        },
        {
          path: "/hr", 
          element: <HR />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;