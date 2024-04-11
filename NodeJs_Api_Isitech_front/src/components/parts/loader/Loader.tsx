import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <span className="loader ease-linear border-t-4 border-[#3682ae] h-12 w-12"></span>
      <h1 className="mt-5">Verification des permissions...</h1>
    </div>
  );
};

export default Loader;
