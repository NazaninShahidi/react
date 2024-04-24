import React from "react";
import Menu from "./components/ui/layout/Menu";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/ui/layout/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <HeroSection />
      <ExploreSection />
      <Footer />
    </div>
  );
}

export default App;
