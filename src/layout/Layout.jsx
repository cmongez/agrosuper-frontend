import React from 'react';
import { Outlet } from 'react-router-dom';
import '../scss/layout.scss';

const LayoutAdmin = () => {
  return (
    <div className="layout">
      <h1>Agrosuper</h1>
      <Outlet />
      <div />
    </div>
  );
};

export default LayoutAdmin;
