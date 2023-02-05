import { useLocation } from 'react-router-dom';
import logo_png from '../assets/img/logo-agrosuper-transparente.png';

const Header = () => {
  const { pathname } = useLocation();

  let title = pathname.substring(1);
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="w-25">
        <img className="img-fluid" src={logo_png} alt="" />
      </div>
      <h1 className="w-50 text-center">General {title === 'General' ? 'Carne' : title}</h1>
      <div className="w-25 text-end">
        <span>Admin</span>
      </div>
    </div>
  );
};
export default Header;
