import "./card.css";

interface Item {
  id: string;
  title: string;
  image: string;
  description: string;
  time: string;
  type: string;
}

function Card<T extends Item>({ item }: { item: T }) {
  return (
    <div className="card">
      <img src={item.image} alt="" className="card-img" />
      {item.type === "vegan" && (
        <div className="vegan-tag">
          <img src="images/vagan-tag.png" alt="" />
        </div>
      )}

      <div className="card-content">
        <div className="card-text-wrapper">
          <h6 className="card-title">{item.title}</h6>
          <p>{item.description}</p>
        </div>
        <div className="card-footer">
          <span>{item.time}</span>
          <button>view recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
