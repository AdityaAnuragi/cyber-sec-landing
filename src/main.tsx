import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from './components/Error.tsx';
import CssBaseline from '@mui/material/CssBaseline'
// import App from './App.tsx'
import { HeaderAndNavBarLayout } from './Layouts/HeaderAndNavBarLayout/HeaderAndNavbarLayout.tsx';
import { AllEvents } from './Layouts/AllEvents/AllEvents.tsx';
import { AllMembers } from './Layouts/AllMembers/AllMembers.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderAndNavBarLayout />,
    children: [
      {
        path: "/",
        element: <h1>this is the home page</h1>
      },
      {
        path: "/events",
        element: <AllEvents />,
        // errorElement: <ErrorPage />
      },
      {
        path: "/members",
        element: <AllMembers />,
        // errorElement: <ErrorPage />
      },
      {
        path: "/research",
        element: <h1>This is the research page</h1>,
      },
      {
        path: "/about",
        element: <h1>This is the about page</h1>,
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: "Page not found"
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </StrictMode>,
)
