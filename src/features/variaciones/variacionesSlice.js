import { createSlice } from '@reduxjs/toolkit';

const variacionesSlice = createSlice({
  name: 'variaciones',
  initialState: {
    variaciones: [],
    explicacion: '',
  },
  reducers: {
    setVariaciones: (state, action) => {
      state.variaciones = action.payload;
    },
    setExplicacion: (state, action) => {
      state.explicacion = action.payload;
    },
  },
});
export const { setVariaciones, setExplicacion } = variacionesSlice.actions;

export default variacionesSlice.reducer;
