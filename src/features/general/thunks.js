import agrosuperApi from '../../api/agrosuperApi';
import { setGeneral } from './generalSlice';

const options = {
  auth: {
    username: 'devsafio',
    token: 'tokentokentokenABC',
  },
  query: {
    initial_date: {
      month: 1,
      year: 2020,
    },
    end_date: {
      month: 1,
      year: 2024,
    },
  },
};

export const getGeneral = () => {
  return async (dispatch) => {
    try {
      const { data } = await agrosuperApi.post('/getCarnesRealProyeccion', options);
      const { real } = data;
      const { proyectado } = data;

      dispatch(setGeneral({ real, proyectado }));
    } catch (error) {
      return error;
    }
  };
};
