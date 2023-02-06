import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

import '../scss/layout.scss';

const LayoutAdmin = () => {
  return (
    <div className="layout">
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <Navbar></Navbar>
          <Outlet />
        </div>
      </div>
      <div />
    </div>
  );
};

export default LayoutAdmin;
