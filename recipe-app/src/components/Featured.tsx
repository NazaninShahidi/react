import Card from "./ui/Card";
import CustomSlider from "./ui/Slider";
import "./featured.css";

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
          <Card /> <Card />
        </div>
      </CustomSlider>
    </div>
  );
}

export default Featured;
