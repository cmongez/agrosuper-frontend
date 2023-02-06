import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import General from '../pages/General';
import Variaciones from '../pages/Variaciones';
import Cerdo from '../pages/Cerdo';
import Pollo from '../pages/Pollo';
import Pavo from '../pages/Pavo';
import Editor from '../pages/Editor';
const RoutesComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/general" element={<General />} />
            <Route path="/variaciones" element={<Variaciones />} />

            <Route path="/cerdo" element={<Cerdo />} />
            <Route path="/pollo" element={<Pollo />} />
            <Route path="/pavo" element={<Pavo />} />
            <Route path="/editor" element={<Editor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;
