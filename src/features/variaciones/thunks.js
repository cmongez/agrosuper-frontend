import agrosuperApi from '../../api/agrosuperApi';
import { setVariaciones } from './variacionesSlice';

const options = {
  auth: {
    username: 'devsafio',
    token: 'tokentokentokenABC',
  },
};

export const getVariaciones = () => {
  return async (dispatch) => {
    try {
      const { data } = await agrosuperApi.post('/obtenerVariaciones', options);
      const variaciones = data.data;

      dispatch(setVariaciones(variaciones));
    } catch (error) {
      return error;
    }
  };
};
