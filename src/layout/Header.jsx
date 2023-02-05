import { useLocation } from 'react-router-dom';
import logo_png from '../assets/img/logo-agrosuper-transparente.png';

const Header = () => {
  const title = 'Carne';

  const location = useLocation();
  console.log(location);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <img src={logo_png} alt="" />
      </div>
      <h1>General {title}</h1>
      <div>
        <span>Admin</span>
      </div>
    </div>
  );
};
export default Header;
