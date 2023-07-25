import { LiaBathSolid } from "react-icons/lia";
import { LiaBedSolid } from "react-icons/lia";
import { VscVerifiedFilled } from "react-icons/vsc";
import { HiChevronDoubleRight } from "react-icons/hi";
import tallbuild from "../../components/assets/tallbuild.png";
import brownbuild from "../../components/assets/brownbuild.png";

const Featured = () => {
  return (
    <div className="px-6 mb-10 md:relative md:px-16">
      <p className="text-base font-medium text-stone-600">
        FEATURED PROPERTIES
      </p>
      <p className="text-xl md:text-2xl font-bold my-3">We provide you</p>
      <h2 className="text-2xl md:text-3xl font-bold gradient-text md:hidden">
        Affordable Living In The Heart of the Country
      </h2>
      <h2 className="hidden md:block text-3xl font-bold gradient-text mb-12">
        The Best Available Properties
      </h2>
      <div className="md:absolute md:-top-8 md:right-16 w-full mb-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 bg-neutral-100 rounded-md p-2 mt-6  w-full">
          <p className="text-xs font-semibold text-customPurple hover:text-customPurple hover:font-medium text-center cursor-pointer">
            Houses
          </p>
          <p className="text-xs font-normal text-neutral-500 hover:text-customPurple hover:font-medium py-2 px-6 border-x-2 border-neutral-600 cursor-pointer">
            Apartment
          </p>
          <p className="text-xs font-normal text-neutral-500 hover:text-customPurple hover:font-medium cursor-pointer ">
            Land
          </p>
        </div>
      </div>
      <div className="md:flex gap-4">
        <div className="relative md:w-3/4">
          <img src={tallbuild} alt="pent house" className="w-full md:h-96" />
          <p className="absolute top-2 left-2 text-white text-base font-semibold rounded bg-white bg-opacity-10 p-2">
            Family Pet Friendly
          </p>
          <div className="absolute bottom-0 left-0 w-full md:w-3/4 p-4">
            <div className=" bg-black bg-opacity-30 p-2">
              <p className="flex  items-center gap-2 text-sm text-green-500">
                Verified <VscVerifiedFilled />
              </p>
              <p className="text-white text-base font-bold">
                #25, Somewhere in Lagos Avenue Lagos Island.
              </p>
              <div className="flex items-center gap-5 my-4">
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <LiaBathSolid /> 2 Bathroom
                </p>
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <LiaBedSolid /> 2 Bathroom
                </p>
              </div>
              <p className="text-2xl text-bold p-2 text-green-500">
                N50,732,234.00
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 md:flex md:flex-col md:justify-between">
          <p className="text-sm text-neutral-500 font-normal mt-6 md:m-0 md:text-right md:p-2">
            Welcome to our apartment rental website! We are dedicated to helping
            you find the perfect place to call home. Our selection of properties
            includes a wide range of options to suit every need and budget.
          </p>
          <div className="relative mt-2">
            <img src={brownbuild} alt="pent house" className="w-full" />
            <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-customPurple text-xl md:text-lg md:p-2 p-5 font-bold text-white">
              <HiChevronDoubleRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
