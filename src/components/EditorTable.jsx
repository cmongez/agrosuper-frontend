import lapiz from '../assets/img/lapiz.svg';
import '../scss/editor_table.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEditor } from '../features/editor/thunks';

const EditorTable = () => {
  let dispatch = useDispatch();

  let { editor } = useSelector((state) => state.editor);

  useEffect(() => {
    dispatch(getEditor());
  }, []);

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center p-2">
      <div className="table-responsive table-responsive-md table-responsive-md">
        <table className="table table-striped  border">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Anterior</th>
              <th scope="col">Actual</th>
              <th scope="col">Variacion %</th>
              <th scope="col">Status</th>
              <th scope="col">Editar Var</th>
              <th scope="col">OK</th>
            </tr>
          </thead>

          <tbody>
            {editor.length > 0 ? (
              editor.map((item, index) => (
                <tr scope="row" key={index}>
                  <th>{item.nombre_var}</th>
                  <td>{item.anterior}</td>
                  <td>{item.actual}</td>
                  <td>{item.variacion_porc}</td>
                  <td>
                    <div className={item.status}></div>
                  </td>
                  <td>
                    <button className=" btn rounded border">
                      <img src={lapiz} />
                    </button>
                  </td>
                  <td>
                    <input className="checkbox" type="checkbox" />
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        <div className="text-end">
          <button className="btn btn-success text-light bg-success disabled">Generar Reporte</button>
        </div>
      </div>
    </div>
  );
};
export default EditorTable;
