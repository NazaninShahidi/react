import React from "react";
import Menu from "./components/ui/layout/Menu";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";

function App() {
  return (
    <div className="App">
      <Menu />
      <HeroSection />
      <ExploreSection />
    </div>
  );
}

export default App;
