import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import General from '../pages/General';
import Variaciones from '../pages/Variaciones';
import Cerdo from '../pages/Cerdo';
import Pollo from '../pages/Pollo';
import Pavo from '../pages/Pavo';
import Editor from '../pages/Editor';
import Profile from '../pages/Profile';
import RequireAuth from '../components/RequireAuth';
const RoutesComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            <Route
              index
              path="/"
              element={
                <RequireAuth>
                  <Navigate to="/general" />
                </RequireAuth>
              }
            />

            <Route
              index
              path="/general"
              element={
                <RequireAuth>
                  <General />
                </RequireAuth>
              }
            />
            <Route
              path="/variaciones"
              element={
                <RequireAuth>
                  <Variaciones />
                </RequireAuth>
              }
            />
            <Route
              path="/perfil"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            <Route
              path="/cerdo"
              element={
                <RequireAuth>
                  <Cerdo />
                </RequireAuth>
              }
            />
            <Route
              path="/pollo"
              element={
                <RequireAuth>
                  <Pollo />
                </RequireAuth>
              }
            />
            <Route
              path="/pavo"
              element={
                <RequireAuth>
                  <Pavo />
                </RequireAuth>
              }
            />
            <Route
              path="/editor"
              element={
                <RequireAuth>
                  <Editor />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;
