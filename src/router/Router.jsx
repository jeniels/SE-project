import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MyJobs from "../pages/MyJobs";
import SalaryPage from "../pages/SalaryPage";
import CreateJob from "../pages/CreateJob";
import UpdateJob from "../pages/UpdateJob";
import JobDetails from "../pages/JobDetails";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CompanyLogin from "@/pages/CompanyLogin";
import UserLogin from "@/pages/UserLogin";
import ViewApplicants from "@/components/ViewApplicants";
import ApplicantScore from "@/pages/ApplicantScore";
import CompanyDesc from "@/pages/CompanyDesc";
import Interview from "@/pages/Interview";
import Test from "@/pages/Test";
import Resume from "@/pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-job",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-jobs/${params.id}`),
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/companylogin",
        element: <CompanyLogin />,
      },
      {
        path: "/userlogin",
        element: <UserLogin />,
      },
      {
        path: "/applicants/:id",
        element: <ViewApplicants />,
      },

      {
        path: "/applicantscore/:id",
        element: <ApplicantScore />,
      },
      {
        path: "/company/:id",
        element: <CompanyDesc />,
      },
      {
        path: "/roadmap/",
        element: <CompanyDesc />,
      },
      {
        path: "/interview/",
        element: <Interview />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
