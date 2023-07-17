import errorGif from "assets/img/source.gif";
const NotFound = () => {
  return (
    <div className="text-center text-danger">
      <h1 className="mb-4">
        Page not found <span> 404</span>{" "}
      </h1>
      ;
      <img className="w-50 h-50 text-center" src={errorGif} alt="Error" />
    </div>
  );
};

export default NotFound;
