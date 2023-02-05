import { NavLink } from 'react-router-dom';
import '../scss/navbar.scss';

const Navbar = () => {
  const links = ['General', 'Cerdo', 'Pollo', 'Pavo', 'Editor'];
  return (
    <nav className="col-3 d-flex flex-column">
      {links.map((item) => {
        return (
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={`/${item.toLowerCase()}`} key={item}>
            {item}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
