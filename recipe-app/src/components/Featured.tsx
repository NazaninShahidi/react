import Card from "./ui/Card";
import CustomSlider from "./ui/Slider";
import "./featured.css";

const recipeList = [
  {
    id: "1",
    title: "Savory Herb-Infused Chicken",
    image: "images/recipe/chicken.png",
    description:
      "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
    time: "40 Min - easy prep - 3 serves",
    type: "dinner",
  },
  {
    id: "2",
    title: "Decadent Chocolate Mousse",
    image: "images/recipe/mousse.png",
    description:
      "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
    time: "30 Min - medium prep- 4 serves",
    type: "dessert",
  },
];
function Featured() {
  return (
    <div className="feature">
      <CustomSlider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            alignItems: "start",
          }}
        >
          {recipeList.map((recipe) => (
            <Card key={recipe.id} item={recipe} />
          ))}
        </div>
      </CustomSlider>
    </div>
  );
}

export default Featured;
