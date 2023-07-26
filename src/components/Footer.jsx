import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-customPurple px-6 md:px-16 py-6 md:py-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 gap-4 border-gray-400 pb-10 md:pb-24">
        <div className=" flex items-center justify-between md:items-start  md:flex-col col-span-2 md:col-span-4 ">
          <div className="inline-block rounded-md text-base w-28 p-2 bg-white cursor-pointer">
            <Link to="/" className="flex items-center justify-center gap-4">
              <p className="text-sm md:text-lg text-customPurple font-semibold">
                Rent <span className="font-normal">it</span>
              </p>
              <GoHome className="text-customPurple text-sm md:text-lg" />
            </Link>
          </div>
          <div className="text-white text- font-normal text-sm md:text-base md:mt-4">
            <p className="flex items-center gap-1">
              <BiMailSend />
              info@rentit.com
            </p>
            <p className="flex items-center gap-1">
              <BiPhoneCall />
              +(234)80555555
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:justify-between">
          <h2 className=" text-sm md:text-base font-bold text-white">
            Buy, Rent & Sell
          </h2>
          <p className="text-sm text-white font-normal">
            Buy & Sell Properties
          </p>
          <p className="text-sm text-white font-normal">Rent home</p>
          <p className="text-sm text-white font-normal">Finance</p>
        </div>
        <div className="flex flex-col items-end md:items-start md:justify-between">
          <h2 className="text-sm md:text-base font-bold text-white">About</h2>
          <p className="text-sm text-white font-normal">How it works</p>
          <p className="text-sm text-white font-normal">Contact</p>
          <p className="text-sm text-white font-normal">Company</p>
        </div>
        <div className="flex flex-col md:justify-between">
          <h2 className="text-sm md:text-base font-semibold text-white">
            Terms and Privacy
          </h2>
          <p className="text-sm text-white font-normal">Terms of Use</p>
          <p className="text-sm text-white font-normal">Privacy POlicy</p>
          <p className="text-sm text-white font-normal">Trust & Security</p>
        </div>
        <div className="flex flex-col items-end md:items-start md:justify-between">
          <h2 className="text-sm md:text-base font-bold text-white">
            Resources
          </h2>
          <p className="text-sm text-white font-normal">FAQ</p>
          <p className="text-sm text-white font-normal">Blog</p>
          <p className="text-sm text-white font-normal">Guides</p>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-xs text-white">
            © 2023 RentIt. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="bg-blue-700 p-2 md:p-2 rounded-lg">
            <FaFacebook className="bg-blue-700 text-white" />
          </div>
          <div className="bg-blue-900 p-2 rounded-lg">
            <FaLinkedinIn className="bg-blue-900 text-white" />
          </div>
          <div className="bg-pink-600 p-2 rounded-lg">
            <FaInstagram className="bg-pink-600 text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
