import "./explore-section.css";

function ExploreSection() {
  return (
    <div className="explore">
      <div className="text-wrapper">
        <div>
          <span className="tag">explore</span>
          <h2>Our diverse Palette</h2>
          <p>
            {" "}
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
        </div>

        <button className="btn-explore">see more</button>
      </div>
      <div className="filter-wrapper">
        <div className="filter">
          <img src="images/icon/breakfast.png" alt="" />
          <p>breakfest</p>
        </div>
        <div className="filter">
          <img src="images/icon/lunch.png" alt="" />
          <p>lucnch</p>
        </div>
        <div className="filter">
          <img src="images/icon/dinner.png" alt="" />
          <p>dinner</p>
        </div>
        <div className="filter">
          <img src="images/icon/dessert.png" alt="" />
          <p>dessert</p>
        </div>
        <div className="filter">
          <img src="images/icon/bite.png" alt="" />
          <p>quick bite!</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
