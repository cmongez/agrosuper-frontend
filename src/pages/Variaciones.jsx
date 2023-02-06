import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { getVariaciones } from '../features/variaciones/thunks';
import { setExplicacion } from '../features/variaciones/variacionesSlice';

const Variaciones = () => {
  const { variaciones, explicacion } = useSelector((state) => state.variaciones);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVariaciones());
  }, []);
  const handleExplicacion = (e) => {
    dispatch(setExplicacion(e.target.value));
  };
  return (
    <>
      {variaciones.length == 0 ? (
        <Loading />
      ) : (
        <div className=" d-flex flex-column justify-content-center align-items-center p-2">
          <h2>VARIACIONES</h2>

          <div className="table-responsive table-responsive-md table-responsive-md">
            <table className="table table-striped  border ">
              <thead>
                <tr>
                  <th scope="col">Sector</th>
                  <th scope="col">Sem Ant</th>
                  <th scope="col">Sem Ant</th>
                  <th scope="col">Variacion %</th>
                  <th scope="col">Ventas</th>
                  <th scope="col">Costo V.</th>
                  <th scope="col">GAV</th>
                  <th scope="col">Total Ton</th>
                  <th scope="col">Vol. Nac.</th>
                  <th scope="col">Vol. Exp.</th>
                </tr>
              </thead>
              <tbody>
                {variaciones.length > 0 ? (
                  variaciones.map((item) => (
                    <tr scope="row" key={item.nro}>
                      <th>{item.linea}</th>
                      <td>{Math.trunc(item.ropSemAnt)}</td>
                      <td>{Math.trunc(item.ropSemActual)}</td>
                      <td>{Math.trunc(item.rop)}</td>
                      <td>{Math.trunc(item.ventas)}</td>
                      <td>{Math.trunc(item.costoVentas)}</td>
                      <td>{Math.trunc(item.GAV)}</td>
                      <td>{Math.trunc(item.toneladasTotal)}</td>
                      <td>{Math.trunc(item.volNacional)}</td>
                      <td>{Math.trunc(item.volExport)}</td>
                    </tr>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="form-floating col-12 col-sm-8 col-md-6">
            <textarea
              onChange={handleExplicacion}
              style={{
                height: '340px',
              }}
              className="form-control mb-4"
              placeholder="Ingresa aqui la explicación"
              id="textoexplicativo"
              value={explicacion}
            ></textarea>
            <label htmlFor="textoexplicativo">Ingresa aqui la explicación</label>
          </div>
        </div>
      )}
    </>
  );
};

export default Variaciones;
