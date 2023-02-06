import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnio, setUsd } from '../features/general/generalSlice';

const GeneralFilters = () => {
  const [usdCheck, setUsdCheck] = useState(true);
  const { real, usd } = useSelector((state) => state.general);

  // const anios = useSelector(getAnios);

  let anios = real.map((data) => data.anio);
  anios = anios.filter((item, index) => {
    return anios.indexOf(item) === index;
  });

  const dispatch = useDispatch();
  const handleAnio = (e) => {
    let { value } = e.target;
    dispatch(setAnio(value));
  };

  const handleUsdCheck = (e) => {
    if (e.target.value !== usd) {
      setUsdCheck(!usdCheck);
      dispatch(setUsd(e.target.value));
    }
  };

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-6 col-md-2 text-end">Filtrar por:</div>

        {/* 
      Se puede optimizar en caso de que hayan mas tipos de unidades, por ahora se trabajara hardcodeando ya que solo hay 2 unidades. */}
        <div className="col-5 col-md-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="resultado_USD_TON"
              checked={usdCheck}
              id="flexCheckDefault"
              onChange={handleUsdCheck}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              USD TON
            </label>
          </div>

          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              value="resultado_USDM"
              checked={!usdCheck}
              id="flexCheckDefault"
              onChange={handleUsdCheck}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              USD M
            </label>
          </div>
        </div>
        <div className="col-6 col-md-2 ">
          <select
            onChange={handleAnio}
            className="form-select"
            aria-label="Default select example"
            defaultValue="filtrar"
          >
            <option value="filtrar" disabled>
              Año
            </option>
            {anios.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
            x
          </select>
        </div>
      </div>
    </>
  );
};

export default GeneralFilters;
