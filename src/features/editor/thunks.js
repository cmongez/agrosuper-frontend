import agrosuperApi from '../../api/agrosuperApi';
import { setEditor } from './editorSlice';

const options = {
  auth: {
    username: 'devsafio',
    token: 'tokentokentokenABC',
  },
};

export const getEditor = () => {
  return async (dispatch) => {
    try {
      const { data } = await agrosuperApi.post('/editorSemanal', options);
      const editor = data.data;

      dispatch(setEditor(editor));
    } catch (error) {
      return error;
    }
  };
};
