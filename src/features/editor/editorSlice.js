import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    editor: [],
  },
  reducers: {
    setEditor: (state, action) => {
      state.editor = action.payload;
    },
  },
});
export const { setEditor } = editorSlice.actions;

export default editorSlice.reducer;
