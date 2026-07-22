import NavMovingText from "../components/NavMovingText";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ShopHeading from "../components/ShopHeading";
import ShopMain from "../components/ShopMain";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import SabotageGlow from "../components/SabotageGlow";

function Home() {
  return (
    <>
        <NavMovingText />
        <Hero />
        <ShopHeading />
        <ShopMain />
        <SubFooter />
        <SabotageGlow />
    </>
  );
}

export default Home;