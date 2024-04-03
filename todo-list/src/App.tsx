import React from "react";
import "./index.css";
import Button from "./ui/button";
import AddItem from "./component/AddItem";
import ItemList from "./component/ItemList";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <div
      className=" bg-no-repeat bg-cover w-auto h-[100vh]"
      style={{ backgroundImage: "url(/img/bg.png)" }}
    >
      <div className="container p-8 ">
        <AddItem />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
