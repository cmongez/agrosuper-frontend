import { NavLink } from 'react-router-dom';
import '../scss/navbar.scss';

const Navbar = () => {
  const links = ['General', 'Cerdo', 'Pollo', 'Pavo', 'Editor'];
  return (
    <nav className="col-2 justify-content-center align-items-center flex-column">
      <section className="text-center card shadow-lg min-vh-100 p-2">
        {links.map((item) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active btn btn-secondary mb-2' : 'btn btn-primary mb-2 text-white btn-block'
              }
              to={`/${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </NavLink>
          );
        })}
      </section>
    </nav>
  );
};

export default Navbar;
