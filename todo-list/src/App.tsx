import React from "react";
import "./index.css";
import Button from "./ui/button";

function App() {
  return (
    <div
      className="container  rounded-xl shadow border p-8 m-10 bg-no-repeat bg-cover w-auto"
      style={{ backgroundImage: "url(/img/bg.png)" }}
    >
      <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
      <Button name="Submit" />
      <Button name="Edit" type="edit" />
      <Button name="delete" type="delete" />
      <Button name="view" type="view" />
    </div>
  );
}

export default App;
