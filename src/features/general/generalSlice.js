import { createSlice } from '@reduxjs/toolkit';

console.log(process.env);

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    proyectado: [],
    real: [],
    anio: 2022,
    usd: 'resultado_USD_TON',
    prueba: [1, 2, 3, 4, 5],
  },
  reducers: {
    setGeneral: (state, action) => {
      state.real = action.payload.real;

      state.proyectado = action.payload.proyectado;
    },
    setAnio: (state, action) => {
      state.anio = action.payload;
    },
    setUsd: (state, action) => {
      state.usd = action.payload;
    },
  },
});

//SELECTS

//Filtro por concepto y año
//Se podria buscar una forma de implementar una sola funcion que reciba 2 parametros del concepto y el array de datos para ahorrar codigo pero se podria perder legibilidad

// Valores reales
//Ingreso Real

export const getIngresoRealPorAnio = (state) =>
  state.general.real
    .filter((item) => item.concepto === 'INGRESO' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//Costo Real
export const getCostoRealPorAnio = (state) =>
  state.real
    .filter((item) => item.concepto === 'COSTO' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//Resultado Real
export const getResultadoRealPorAnio = (state) =>
  state.real
    .filter((item) => item.concepto === 'RESULTADO' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//Gav Real
export const getGavRealPorAnio = (state) =>
  state.real
    .filter((item) => item.concepto === 'GAV' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//   Valores proyectados
//Ingreso Proyectado
export const getIngresoProyectadoPorAnio = (state) =>
  state.general.proyectado
    .filter((item) => item.concepto === 'INGRESO' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//Costo Proyectado
export const getCostoProyectadoPorAnio = (state) =>
  state.general.proyectado
    .filter((item) => item.concepto === 'COSTO' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//Resultado Proyectado
export const getResultadoProyectadoPorAnio = (state) =>
  state.general.proyectado
    .filter((item) => item.concepto === 'RESULTADO' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

//Gav Proyectado
export const getGavProyectadoPorAnio = (state) =>
  state.general.proyectado
    .filter((item) => item.concepto === 'GAV' && item.anio === state.general.anio)
    .map((item) => {
      return { x: item.mes, y: item[state.general.usd] };
    });

export const { setGeneral, setAnio, setUsd } = generalSlice.actions;

export default generalSlice.reducer;
