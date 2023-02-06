import { useEffect } from 'react';
import Graphics from './Graphics';
import GeneralFilters from './GeneralFilters';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getGeneral } from '../features/general/thunks';

const GraphicsContainer = () => {
  const { real, proyectado, anio, usd } = useSelector((state) => state.general);
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

  //Helper
  //Filtro por concepto y año
  //Se puede implementar para ahorrar codigo pero pierde legibilidad

  //   const filterConceptAnio = (arrayData, concept) =>type.filter((item) => item.concepto === concept && item.anio === anio);
  //   const ingresoReal = filterConceptAnio(real,'INGRESO' )

  // Valores reales
  //Ingreso Real
  const ingresoReal = real.filter((item) => item.concepto === 'INGRESO' && item.anio === anio);
  const ingresoRealY = ingresoReal.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //Costo Real
  const costoReal = real.filter((item) => item.concepto === 'COSTO' && item.anio === anio);
  const costoRealY = costoReal.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //Resultado Real
  const resultadoReal = real.filter((item) => item.concepto === 'RESULTADO' && item.anio === anio);
  const resultadoRealY = resultadoReal.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //Gav Real
  const gavReal = real.filter((item) => item.concepto === 'GAV' && item.anio === anio);
  const gavRealY = gavReal.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //   Valores proyectados
  //Ingreso Proyectado
  const ingresoProyectado = proyectado.filter((item) => item.concepto === 'INGRESO' && item.anio === anio);
  const ingresoProyectadoY = ingresoProyectado.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //Costo Proyectado
  const costoProyectado = proyectado.filter((item) => item.concepto === 'COSTO' && item.anio === anio);
  const costoProyectadoY = costoProyectado.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //Resultado Proyectado
  const resultadoProyectado = proyectado.filter((item) => item.concepto === 'RESULTADO' && item.anio === anio);

  const resultadoProyectadoY = resultadoProyectado.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  //Gav Proyectado
  const gavProyectado = proyectado.filter((item) => item.concepto === 'GAV' && item.anio === anio);
  const gavProyectadoY = gavProyectado.map((item) => {
    return { x: item.mes, y: item[usd] };
  });

  return (
    <div className="container-fluid">
      <GeneralFilters />
      <div className="row">
        <div className="col col-md-6 p-4">
          <Graphics
            title={`Ingreso ${anio}`}
            axisY1={ingresoRealY}
            axisX={months}
            axisY2={ingresoProyectadoY}
            usd={usd}
          />
        </div>
        <div className="col col-md-6 p-4">
          <Graphics title={`Costo ${anio}`} axisY1={costoRealY} axisX={months} axisY2={costoProyectadoY} usd={usd} />
        </div>
        <div className="col col-md-6 p-4">
          <Graphics title={`Gav ${anio}`} axisY1={gavRealY} axisX={months} axisY2={gavProyectadoY} usd={usd} />
        </div>
        <div className="col col-md-6 p-4">
          <Graphics
            title={`Resultado ${anio}`}
            axisY1={resultadoRealY}
            axisX={months}
            axisY2={resultadoProyectadoY}
            usd={usd}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsContainer;
