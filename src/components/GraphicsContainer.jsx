import { useEffect } from 'react';
import Graphics from './Graphics';
import GeneralFilters from './GeneralFilters';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getGeneral } from '../features/general/thunks';
import {
  getIngresoRealPorAnio,
  getCostoRealPorAnio,
  getResultadoRealPorAnio,
  getGavRealPorAnio,
  getIngresoProyectadoPorAnio,
  getCostoProyectadoPorAnio,
  getResultadoProyectadoPorAnio,
  getGavProyectadoPorAnio,
} from '../features/general/generalSlice';

const GraphicsContainer = () => {
  const { real, proyectado, anio, usd } = useSelector((state) => state.general);
  //Valores Reales por Anio
  const ingresoRealPorAnio = useSelector(getIngresoRealPorAnio);
  const costoRealPorAnio = useSelector(getCostoRealPorAnio);
  const resultadoRealPorAnio = useSelector(getResultadoRealPorAnio);
  const gavRealPorAnio = useSelector(getGavRealPorAnio);

  //Valores proyectados por Anio
  const ingresoProyectadoPorAnio = useSelector(getIngresoProyectadoPorAnio);
  const costoProyectadoPorAnio = useSelector(getCostoProyectadoPorAnio);
  const resultadoProyectadoPorAnio = useSelector(getResultadoProyectadoPorAnio);
  const gavProyectadoPorAnio = useSelector(getGavProyectadoPorAnio);

  //   let a = 1;
  //   setInterval(() => {
  //     console.log(a, real);
  //     a++;
  //   }, 1000);
  //Obtenemos la data de general carnes
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeneral());
  }, []);

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="container-fluid">
      <GeneralFilters />
      <div className="row">
        <div className="col col-md-6 p-4">
          <Graphics
            title={`Ingreso ${anio}`}
            axisY1={ingresoRealPorAnio}
            axisX={months}
            axisY2={ingresoProyectadoPorAnio}
            usd={usd}
          />
        </div>
        <div className="col col-md-6 p-4">
          <Graphics
            title={`Costo ${anio}`}
            axisY1={costoRealPorAnio}
            axisX={months}
            axisY2={costoProyectadoPorAnio}
            usd={usd}
          />
        </div>
        <div className="col col-md-6 p-4">
          <Graphics
            title={`Gav ${anio}`}
            axisY1={gavRealPorAnio}
            axisX={months}
            axisY2={gavProyectadoPorAnio}
            usd={usd}
          />
        </div>
        <div className="col col-md-6 p-4">
          <Graphics
            title={`Resultado ${anio}`}
            axisY1={resultadoRealPorAnio}
            axisX={months}
            axisY2={resultadoProyectadoPorAnio}
            usd={usd}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsContainer;
