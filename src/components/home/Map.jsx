import plentydot from "../assets/Plentydot.png";
import vectormap from "../assets/_Vectormap.png";

const Map = () => {
  return (
    <div className="bg-yellow-50 md:px-16">
      <div className="flex justify-center px-6">
        <p className="flex items-center justify-center gap-4 w-full md:w-2/5 p-1 text-sm font-semibold text-yellow-900 px-1 md:px-2  bg-neutral-100 rounded">
          <span className="px-1  bg-yellow-200 font-semibold rounded-md w-3/5 ">
            Coming soon
          </span>
          This feature is now available on beta testing
        </p>
      </div>
      <div className="px-6 py-8">
        <h2 className="text-2xl text-blue-950 font-bold text-center mb-10">
          Local Area View
        </h2>
        <p className="text-sm text-center text-neutral-500 font-normal md:px-32">
          Welcome to our apartment rental website! We are dedicated to helping
          you find the perfect place to call home. Our selection of properties
          includes a wide range of options to suit every need and budget.
        </p>
      </div>
      <div className="md:hidden">
        <img src={plentydot} alt="map" className="w-full" />
      </div>
      <div className="hidden md:block">
        <img src={vectormap} alt="map" className="w-full max-h-72" />
      </div>
    </div>
  );
};

export default Map;
