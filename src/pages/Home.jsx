import NavMovingText from "../components/NavMovingText";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ShopHeading from "../components/ShopHeading";
import ShopMain from "../components/ShopMain";
import SubFooter from "../components/SubFooter";

function Home() {
  return (
    <>
        <NavMovingText />
        <Hero />
        <Categories />
        <ShopHeading />
        <ShopMain />
        <SubFooter />
    </>
  );
}

export default Home;