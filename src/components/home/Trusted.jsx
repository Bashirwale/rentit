import techC from "../../components/assets/featured/techC.png";
import forbes from "../../components/assets/featured/forbes.png";
import entrepreneur from "../../components/assets/featured/entrepreneur.png";
import techtimes from "../../components/assets/featured/techtimes.png";
import thewall from "../../components/assets/featured/thewall.png";

const Trusted = () => {
  return (
    <div className="w-full mt-6  px-8">
      <h2 className="text-base text-neutral-500 font-semibold text-center">
        Trusted By:
      </h2>
      <div className="flex items-center justify-between md:justify-evenly mt-2 ">
        <img src={techC} alt="trusted by" className="h-3 sm:h-6 md:h-8" />
        <img src={forbes} alt="trusted by" className="h-3 sm:h-6 md:h-8" />
        <img
          src={entrepreneur}
          alt="trusted by"
          className="h-3 sm:h-6 md:h-8"
        />
        <img src={techtimes} alt="trusted by" className="h-3 sm:h-6 md:h-8" />
        <img src={thewall} alt="trusted by" className="h-3 sm:h-6 md:h-8" />
      </div>
    </div>
  );
};

export default Trusted;
