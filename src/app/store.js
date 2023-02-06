import { configureStore } from '@reduxjs/toolkit';
import generalSlice from '../features/general/generalSlice';
import variacionesSlice from '../features/variaciones/variacionesSlice';
import authSlice from '../features/auth/authSlice';
import editorSlice from '../features/editor/editorSlice';
export const store = configureStore({
  reducer: { general: generalSlice, variaciones: variacionesSlice, auth: authSlice, editor: editorSlice },
});
