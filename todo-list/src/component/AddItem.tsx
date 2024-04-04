import { useContext, useRef } from "react";
import Button from "../ui/button";
import { TodoContext } from "../context/TodoContext";

function AddItem() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addItem, items } = useContext(TodoContext);

  function submitHandler() {
    const currentValue = inputRef.current.value;
    if (currentValue) {
      addItem(currentValue);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <div className="flex justify-evenly items-center w-full my-2">
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-[400px] h-[40px] rounded-full bg-[#85BCAD] my-6 outline-none text-white p-3"
            ref={inputRef}
          />
          <Button name="Submit" handleFunc={submitHandler} />
        </div>

        <img src="./img/image.png" />
      </div>
      <div className="w-[1200px] h-[2px] bg-[#BFBCBC] mx-auto my-5"></div>
    </>
  );
}
export default AddItem;
