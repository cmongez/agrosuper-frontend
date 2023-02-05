import { useState } from 'react';
import Variaciones from './Variaciones';

const General = () => {
  const [general, setGeneral] = useState(true);

  const handleGeneral = () => {
    setGeneral(!general);
    console.log(process.env.local);
  };

  return (
    <div className="col-10">
      <div className="text-center">
        <button
          onClick={handleGeneral}
          disabled={general}
          className={general ? 'text-white btn btn-primary disabled' : 'text-white btn btn-primary'}
        >
          General
        </button>
        <button
          onClick={handleGeneral}
          disabled={!general}
          className={!general ? 'text-white btn btn-primary disabled' : 'text-white btn btn-primary'}
        >
          Variaciones
        </button>
      </div>
      {general ? <div>General</div> : <Variaciones />}
    </div>
  );
};
export default General;
