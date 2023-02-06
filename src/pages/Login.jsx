//Estilos
import '../scss/login.scss';
import logo_png from '../assets/img/logo-agrosuper-transparente.png';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();

  const { user, pass } = useSelector((state) => state.auth);

  const sendToGeneral = () => {
    navigate('/general');
  };

  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-between align-items-between">
        <div></div>
        <section className="container">
          <div className="text-center mb-2">
            <img className="img-fluid " src={logo_png} alt="logo" />
          </div>
          <div className="row justify-content-center align-items-center flex-column">
            <div className="col-10 col-md-6 text-center card shadow-lg ">
              <form className="w-75 mx-auto pt-4">
                <h1 className="text-agro-primary mb-4">Login</h1>

                <div className="form-outline">
                  <input type="text" id="user" className="form-control" placeholder="Usuario" />
                  <label className="form-label" htmlFor="user"></label>
                </div>

                <div className="form-outline">
                  <input type="password" id="pass" className="form-control" placeholder="Contraseña" />
                  <label className="form-label" htmlFor="pass"></label>
                </div>

                <div className="text-center d-flex flex-column pt-1 mb-5 pb-1">
                  <button
                    onClick={() => sendToGeneral()}
                    className="btn btn-primary text-white btn-block mb-3"
                    type="button"
                  >
                    Entrar
                  </button>
                  <a className="text-muted" href="#!">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <div className="d-flex align-items-center justify-content-center pb-4">
                  <a className="mb-0 me-2 text-muted" href="#!">
                    ¿No tienes una cuenta?
                  </a>
                  <button type="button" className="btn btn-secondary">
                    Crear cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Login;
