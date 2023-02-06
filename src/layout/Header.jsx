import { Link, useLocation } from 'react-router-dom';
import logo_png from '../assets/img/logo-agrosuper-transparente.png';
import perfil from '../assets/img/perfil.png';
import '../scss/header.scss';

const Header = () => {
  const { pathname } = useLocation();

  let title = pathname.substring(1);
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <header className="header d-flex justify-content-between align-items-center ">
      <div className="w-25 pe-md-3 ps-1">
        <Link to={'general'}>
          <img className="img-fluid" src={logo_png} alt="" />
        </Link>
      </div>
      <h1 className="w-50 text-center text-agro-secondary fw-semibold">
        General {title === 'General' ? 'Carnes' : title}
      </h1>
      <div className="w-25 text-end pe-md-3 pe-1">
        <img className="img-fluid " src={perfil} alt="icono de perfil" />
      </div>
    </header>
  );
};
export default Header;
