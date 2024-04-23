import "./Hero-section.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-text-wrapper">
        <h1 className="hero-title">Unleash Culinary Excellence</h1>
        <p>
          {" "}
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </p>

        <button>explore recipes</button>
      </div>
    </div>
  );
}

export default HeroSection;
