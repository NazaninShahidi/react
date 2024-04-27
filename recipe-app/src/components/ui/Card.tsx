import "./card.css";

function Card() {
  return (
    <div className="card">
      <img src="images/recipe/chicken.png" alt="" className="card-img" />
      <div className="card-content">
        <div className="card-text-wrapper">
          <h6 className="card-title">Savory Herb-Infused Chicken</h6>
          <p>
            Indulge in the rich and savory symphony of flavors with our Savory
            Herb-Infused Chicken
          </p>
        </div>
        <div className="card-footer">
          <span>40 Min - easy prep - 3 serves</span>
          <button>view recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
