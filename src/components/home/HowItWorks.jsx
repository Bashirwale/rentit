import interrior from "../../components/assets/interrior.png";

const HowItWorks = () => {
  return (
    <div className="py-12 px-8 md:px-16">
      <h2 className="text-sm text-center md:text-left font-medium text-customPurple">
        EXPLORE OUR PLATFORM
      </h2>
      <h3 className="text-2xl my-3 font-bold text-center md:text-left">
        HOW IT WORKS
      </h3>
      <p className="text-sm font-normal text-neutral-500 text-center md:text-left md:w-2/4">
        Welcome to our apartment rental website! We are dedicated to helping you
        find the perfect place to call home. Our selection of properties
        includes a wide range of options to suit every need and budget.
      </p>
      <img src={interrior} alt="interrior" className="w-full mt-4 md:hidden" />
      <div className="mt-8">
        <div className="flex items-center gap-10 py-2 border-b-neutral-300">
          <p className="text-base font-bold rounded-full bg-neutral-300 flex items-center justify-center p-2 w-8 h-8">
            1.
          </p>
          <p className="text-base font-semibold text-neutral-500 border-b border-b-neutral-300 p-2 md:p-4 w-full">
            Searched for Property
          </p>
        </div>
        <div className="flex items-center gap-10 py-2 ">
          <p className="flex items-center justify-center text-base font-bold rounded-full bg-neutral-300 p-2 w-8 h-8">
            2.
          </p>
          <p className="text-base font-semibold text-neutral-500 border-b border-b-neutral-300 p-1 md:p-4 w-full">
            Selected Wanted Apartment
          </p>
        </div>
        <div className="flex items-center gap-10 py-2 border-b-neutral-500">
          <p className="flex items-center justify-center text-base font-bold rounded-full bg-neutral-300 p-2 w-8 h-8">
            3.
          </p>
          <p className="text-base font-semibold text-neutral-500 border-b border-b-neutral-300 p-2 md:p-4 w-full">
            Schedule A Tour
          </p>
        </div>
        <div className="flex items-center gap-10 py-2 border-b-neutral-300">
          <p className="flex items-center justify-center text-base font-bold rounded-full bg-neutral-300 p-2 w-8 h-8">
            4.
          </p>
          <p className="text-base font-semibold text-neutral-500 p-2 md:p-4">
            Book Your Apartment
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
