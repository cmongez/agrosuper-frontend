import '../scss/loading.scss';

const Loading = () => {
  return (
    <div className="loading d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-agro-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="text-dark">Cargando...</span>
    </div>
  );
};
export default Loading;
