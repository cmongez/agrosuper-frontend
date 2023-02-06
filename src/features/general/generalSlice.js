import { createSlice } from '@reduxjs/toolkit';

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

// export const selectProyectado = (state) => state.proyectado.legth + 1;

export const { setGeneral, setAnio, setUsd } = generalSlice.actions;

export default generalSlice.reducer;
