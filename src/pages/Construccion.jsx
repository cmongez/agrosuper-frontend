import construccion from '../assets/img/sitio_en_construccion.jpg';

const Construccion = () => {
  return (
    <div className="col-10 text-center">
      <div className="card ">
        <div className="text-center">
          <img src={construccion} className=" img-fluid w-50 text-center" alt="sitio en construccion" />
        </div>
        <div className="card-body">
          <p className="card-text text-center">
            Lo sentimos, seguimos trabajando en esta sección. Pronto estara disponible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Construccion;
