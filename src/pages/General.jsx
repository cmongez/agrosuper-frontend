import { useState } from 'react';
import Variaciones from './Variaciones';
import GraphicsContainer from '../components/GraphicsContainer';
import Loading from '../components/Loading';

const General = () => {
  const [general, setGeneral] = useState(true);

  const handleGeneral = (bool) => {
    setGeneral(bool);
  };

  return (
    <>
      {0 !== 0 ? (
        <Loading />
      ) : (
        <div className="col-10 pe-2">
          <div className=" card shadow-lg">
            <div className="text-center ">
              <button
                onClick={() => handleGeneral(true)}
                className={general ? 'active btn btn-secondary m-2' : 'btn btn-primary m-2 text-white btn-block'}
              >
                General
              </button>
              <button
                onClick={() => handleGeneral(false)}
                className={!general ? 'active btn btn-secondary m-2' : 'btn btn-primary m-2 text-white btn-block'}
              >
                Variaciones
              </button>
            </div>
            {general ? (
              <div className="pe-4">
                <h2 className="text-center">Carnes</h2>
                <GraphicsContainer />
              </div>
            ) : (
              <Variaciones />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default General;
