import App from "app/App";
import { reportWebVitals } from 'web-vitals';
import { getCLS, getFCP, getFID, getLCP, getTTFB} from 'web-vitals';
// import reportWebVitals from 'web-vitals';
import AboutUs from "app/pages/AboutUs/AboutUs";
import Blog from "app/pages/Blog/Blog";
import BlogError from "app/pages/Blog/BlogError";
import Blogs from "app/pages/Blogs/Blogs";
import CapabilityDev from "app/pages/CapabilityDev/CapabilityDev";
import CaseStudies from "app/pages/CaseStudies/CaseStudies";
import ContactUs from "app/pages/ContactUs/ContactUs";
import ErrorPage from "app/pages/ErrorPage/ErrorPage";
import Feedback from "app/pages/Feedback/Feedback";
import Homepage from "app/pages/Homepage/Homepage";
import Questionaire from "app/pages/Questionaire/Questionaire";
import Resources from "app/pages/Resources/Resources";
import SharingGoals from "app/pages/SharingGoals/SharingGoals";
import Surveys from "app/pages/Surveys/Surveys";
import Transformation from "app/pages/Transformation/Transformation";
import Education from "app/pages/Education/Education";
import Digitalmarketing from "app/pages/Digitalmarketing/Digitalmarketing";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import './index.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./index.css";


//import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/sharing-goals",
        element: <SharingGoals />,
      },
      {
        path: "/questionnaire",
        element: <Questionaire />,
      },
      {
        path: "/resources",
        children: [
          {
            index: true,
            element: <Resources />,
          },
          {
            path: "case-studies",
            element: <CaseStudies />,
          },
          {
            path: "surveys",
            element: <Surveys />,
          },
          {
            path: "blogs",
            errorElement: <BlogError />,
            children: [
              {
                index: true,
                element: <Blogs />,
              },
              {
                path: ":id",
                element: <Blog />,
              },
            ],
          },
        ],
      },
      {
        path: "/transformation-consultation",
        element: <Transformation />,
      },
      {
        path: "/Digital-marketing",
        element: <Digitalmarketing />,
      },
      {
        path: "/Education-Consultation",
        element: <Education />,
      },
      {
        path: "/capability-development",
        element: <CapabilityDev />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();








