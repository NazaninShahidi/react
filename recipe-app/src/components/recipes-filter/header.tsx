import { useState } from "react";

interface Item {
  id: string;
  title: string;
  image: string;
  description: string;
  time: string;
  type: string;
}

interface Props {
  list: Item[];
  handlerChangeList: (item) => void;
}

const RecipeHeader = ({ list, handlerChangeList }: Props) => {
  const [activeButton, setActiveButton] = useState("all");
  const filterHandler = (currentName) => {
    let newArr;
    if (currentName === "all") {
      newArr = list;
    } else {
      newArr = list.filter((item) => item.type === currentName);
    }
    handlerChangeList(newArr);
    setActiveButton(currentName); // Update active button state
  };

  return (
    <div className="header-wrapper">
      <span className="span-tag">recipes</span>
      <div className="text-wrapper">
        <div>
          <h2>Embark on a journey</h2>
          <p>
            With our diverse collection of recipes we have something to satisfy
            every palate.
          </p>
        </div>
      </div>
      <div className="tab-wrapper">
        <button
          name="all"
          className={`tab-wrapper-btn ${
            activeButton === "all" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          All
        </button>
        <button
          name="vegan"
          className={`tab-wrapper-btn ${
            activeButton === "vegan" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          Vegan
        </button>
        <button
          name="breakfast"
          className={`tab-wrapper-btn ${
            activeButton === "breakfast" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          breakfast
        </button>{" "}
        <button
          name="lunch"
          className={`tab-wrapper-btn ${
            activeButton === "lunch" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          lunch{" "}
        </button>
        <button
          name="dinner"
          className={`tab-wrapper-btn ${
            activeButton === "dinner" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          dinner{" "}
        </button>
        <button
          name="dessert"
          className={`tab-wrapper-btn ${
            activeButton === "dessert" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          dessert{" "}
        </button>
        <button
          name="quick_bite"
          className={`tab-wrapper-btn ${
            activeButton === "quick_bite" ? "active" : ""
          }`}
          onClick={(e) => filterHandler(e.currentTarget.name)}
        >
          quick bite!{" "}
        </button>
      </div>
    </div>
  );
};

export default RecipeHeader;
