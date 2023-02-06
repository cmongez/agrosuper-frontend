import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutAdmin = () => {
  return (
    <div className="layout">
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <Navbar></Navbar>
          <Outlet />
          <Footer />
        </div>
      </div>
      <div />
    </div>
  );
};

export default LayoutAdmin;
