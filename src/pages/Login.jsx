//Estilos
import '../scss/login.scss';
import logo_png from '../assets/img/logo-agrosuper-transparente.png';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setLogin } from '../features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();

  const { user, pass, isLogin } = useSelector((state) => state.auth);

  const [userForm, setUserForm] = useState();
  const [passForm, setPassForm] = useState();
  const [passWrong, setPassWrong] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userForm === user && passForm === pass) {
      dispatch(setLogin());
      navigate('/general');
      return;
    }
    setPassWrong(true);
    return;
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/general');
    }
  }, []);

  const sendToGeneral = () => {
    //
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
              <form onChange={() => setPassWrong(false)} onSubmit={handleSubmit} className="w-75 mx-auto pt-4">
                <h1 className="text-agro-primary mb-4">Login</h1>

                <div className="form-outline">
                  <input
                    onChange={({ target }) => setUserForm(target.value)}
                    name="username"
                    type="text"
                    id="userfo"
                    className="form-control"
                    placeholder="Usuario"
                  />
                  <label className="form-label" htmlFor="userfo"></label>
                </div>

                <div className="form-outline">
                  <input
                    name="password"
                    onChange={({ target }) => setPassForm(target.value)}
                    type="password"
                    id="passfo"
                    className="form-control"
                    placeholder="Contraseña"
                  />
                  <label className="form-label" htmlFor="passfo"></label>
                  {passWrong ? <span className="text-danger text-end">Datos incorrectos</span> : <></>}
                </div>

                <div className="text-center d-flex flex-column pt-1 mb-5 pb-1">
                  <button className="btn btn-primary text-white btn-block mb-3" type="submit">
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
