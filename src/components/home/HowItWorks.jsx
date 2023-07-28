import { useState } from "react";
import interrior from "../../components/assets/interrior.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const HowItWorks = () => {
  const [showDetails, setShowDetails] = useState({
    open1: false,
    open2: false,
    open3: false,
    open4: false,
  });

  const handleToggleDetails = (divKey) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [divKey]: !prevDetails[divKey],
    }));
    console.log(showDetails.divkey);
  };
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
        <div
          className=" flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-2 cursor-pointer"
          onClick={() => handleToggleDetails("open1")}
        >
          <h3
            className={
              showDetails.open1
                ? "text-base font-bold rounded-full bg-gradient-to-br from-blue-700 to-blue-400 text-white flex items-center justify-center p-2 w-8 h-8"
                : "text-base font-bold rounded-full bg-neutral-300 flex items-center justify-center p-2 w-8 h-8"
            }
          >
            1.
          </h3>
          <div className="border-b border-b-neutral-300 pb-2 w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
            <p
              className={
                showDetails.open1
                  ? "flex items-center justify-between text-lg lg:text-2xl font-semibold bg-white bg-gradient-to-br from-blue-700 to-blue-400 bg-clip-text text-transparent "
                  : "flex items-center justify-between text-base lg:text-2xl font-semibold text-neutral-500"
              }
            >
              Searched for Property
              <IoIosArrowDroprightCircle
                className={showDetails.open1 ? "hidden" : "block"}
              />
              <IoIosArrowDropdownCircle
                className={showDetails.open1 ? "block text-blue-600" : "hidden"}
              />
            </p>
            <p
              className={
                showDetails.open1 ? "text-sm md:text-base mt-2" : "hidden"
              }
            >
              Welcome to our apartment rental website! We are dedicated to
              helping you find the perfect place to call home. Our selection of
              properties includes a wide range of options to suit every need and
              budget.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-2"
          onClick={() => handleToggleDetails("open2")}
        >
          <h3
            className={
              showDetails.open2
                ? "text-base font-bold rounded-full bg-gradient-to-br from-purple-800 to-purple-400 text-white flex items-center justify-center p-2 w-8 h-8"
                : "text-base font-bold rounded-full bg-neutral-300 flex items-center justify-center p-2 w-8 h-8"
            }
          >
            2.
          </h3>
          <div className="border-b border-b-neutral-300 pb-2 w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
            <p
              className={
                showDetails.open2
                  ? "flex items-center justify-between text-lg lg:text-2xl font-semibold bg-white bg-gradient-to-br from-purple-800 to-purple-400 bg-clip-text text-transparent "
                  : "flex items-center justify-between text-base lg:text-2xl font-semibold text-neutral-500"
              }
            >
              Select Wanted Apartment
              <IoIosArrowDroprightCircle
                className={showDetails.open2 ? "hidden" : "block"}
              />
              <IoIosArrowDropdownCircle
                className={
                  showDetails.open2 ? "block text-purple-600" : "hidden"
                }
              />
            </p>
            <p
              className={
                showDetails.open2 ? "text-sm md:text-base mt-2" : "hidden"
              }
            >
              Welcome to our apartment rental website! We are dedicated to
              helping you find the perfect place to call home. Our selection of
              properties includes a wide range of options to suit every need and
              budget.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-2 "
          onClick={() => handleToggleDetails("open3")}
        >
          <h3
            className={
              showDetails.open3
                ? "text-base font-bold rounded-full bg-gradient-to-br from-orange-700 to-orange-400 text-white flex items-center justify-center p-2 w-8 h-8"
                : "text-base font-bold rounded-full bg-neutral-300 flex items-center justify-center p-2 w-8 h-8"
            }
          >
            3.
          </h3>
          <div className="border-b border-b-neutral-300 pb-2 w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
            <p
              className={
                showDetails.open3
                  ? "flex items-center justify-between text-lg lg:text-2xl font-semibold bg-white bg-gradient-to-br from-orange-800 to-orange-400 bg-clip-text text-transparent "
                  : "flex items-center justify-between text-base lg:text-2xl font-semibold text-neutral-500"
              }
            >
              Schedule A Tour
              <IoIosArrowDroprightCircle
                className={showDetails.open3 ? "hidden" : "block"}
              />
              <IoIosArrowDropdownCircle
                className={
                  showDetails.open3 ? "block text-orange-600" : "hidden"
                }
              />
            </p>
            <p
              className={
                showDetails.open3 ? "text-sm md:text-base mt-2" : "hidden"
              }
            >
              Welcome to our apartment rental website! We are dedicated to
              helping you find the perfect place to call home. Our selection of
              properties includes a wide range of options to suit every need and
              budget.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-2 "
          onClick={() => handleToggleDetails("open4")}
        >
          <h3
            className={
              showDetails.open4
                ? "text-base font-bold rounded-full bg-gradient-to-br from-green-800 to-green-400 text-white flex items-center justify-center p-2 w-8 h-8"
                : "text-base font-bold rounded-full bg-neutral-300 flex items-center justify-center p-2 w-8 h-8"
            }
          >
            4.
          </h3>
          <div className="border-b border-b-neutral-300 pb-2 w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
            <p
              className={
                showDetails.open4
                  ? "flex items-center justify-between text-lg lg:text-2xl font-semibold bg-white bg-gradient-to-t from-green-800 to-green-400 bg-clip-text text-transparent "
                  : "flex items-center justify-between text-base lg:text-2xl font-semibold text-neutral-500"
              }
            >
              Book Your Apartment
              <IoIosArrowDroprightCircle
                className={showDetails.open4 ? "hidden" : "block"}
              />
              <IoIosArrowDropdownCircle
                className={
                  showDetails.open4 ? "block text-green-600" : "hidden"
                }
              />
            </p>
            <p
              className={
                showDetails.open4 ? "text-sm md:text-base mt-2" : "hidden"
              }
            >
              Welcome to our apartment rental website! We are dedicated to
              helping you find the perfect place to call home. Our selection of
              properties includes a wide range of options to suit every need and
              budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
