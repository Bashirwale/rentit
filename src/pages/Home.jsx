import Hero from "../components/home/Hero";
import Search from "../components/home/Search";
import main from "../components/assets/main.png";
import Trusted from "../components/home/Trusted";
import HowItWorks from "../components/home/HowItWorks";
import Featured from "../components/home/Featured";
import Map from "../components/home/Map";

const Home = () => {
  return (
    <div className="pt-10">
      <Hero />
      <Search />
      <div className="md:hidden mt-12 px-6">
        <img src={main} alt="home-img" className=" w-full" />
      </div>
      <Trusted />
      <HowItWorks />
      <Featured />
      <Map />
    </div>
  );
};

export default Home;
