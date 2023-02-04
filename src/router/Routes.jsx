import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Login from '../components/Login';
const RoutesComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;
