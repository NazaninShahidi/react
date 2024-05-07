import React from "react";
import Menu from "./components/layout/Menu";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/layout/Footer";
import Featured from "./components/Featured";
import RecipesFilter from "./components/recipes-filter";
import AboutUs from "./components/about-us";
// import CTA from "./components/cta-section";

function App() {
  return (
    <div className="App">
      <Menu />
      <HeroSection />
      <ExploreSection />
      <Featured />
      <RecipesFilter />
      <AboutUs />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}

export default App;
