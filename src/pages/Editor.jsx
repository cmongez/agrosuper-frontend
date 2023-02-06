import { useState } from 'react';
import EditorTable from '../components/EditorTable';
import Loading from '../components/Loading';
import EditorVariable from './EditorVariable';

const Editor = () => {
  const [editor, setEditor] = useState(true);
  const handleEditor = (bool) => {
    setEditor(bool);
  };
  return (
    <div className="col-10 pe-2">
      <div className=" card shadow-lg">
        <div className="text-center ">
          <button
            onClick={() => handleEditor(true)}
            className={editor ? 'active btn btn-secondary m-2' : 'btn btn-primary m-2 text-white btn-block'}
          >
            Editor
          </button>
          <button
            onClick={() => handleEditor(false)}
            className={!editor ? 'active btn btn-secondary m-2' : 'btn btn-primary m-2 text-white btn-block'}
          >
            Variable 1
          </button>
        </div>
        {editor ? <EditorTable /> : <EditorVariable />}
      </div>
    </div>
  );
};

export default Editor;
