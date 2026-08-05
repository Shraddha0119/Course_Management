import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Dashboard from "../pages/Dashboard";
import MyCourses from "../pages/MyCourses";
import CreateCourse from "../pages/CreateCourse";
import EditCourse from "../pages/EditCourse";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />

        <Route
          path="/courses"
          element={
            <MainLayout>
              <Courses />
            </MainLayout>
          }
        />

        <Route
          path="/courses/:id"
          element={
            <MainLayout>
              <CourseDetails />
            </MainLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/my-courses"
          element={
            <MainLayout>
              <MyCourses />
            </MainLayout>
          }
        />

        <Route
          path="/create-course"
          element={
            <MainLayout>
              <CreateCourse />
            </MainLayout>
          }
        />

        <Route
          path="/edit-course/:id"
          element={
            <MainLayout>
              <EditCourse />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;