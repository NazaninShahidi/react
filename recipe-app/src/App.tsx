import React from "react";
import Menu from "./components/layout/Menu";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/layout/Footer";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App">
      <Menu />
      <HeroSection />
      <ExploreSection />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
