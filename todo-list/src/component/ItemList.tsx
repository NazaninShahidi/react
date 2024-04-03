import { useContext, useState } from "react";
import Button from "../ui/button";
import { TodoContext } from "../context/TodoContext";

function ItemList() {
  const [showButton, setShowButton] = useState(false);
  const { items, deleteAllItem } = useContext(TodoContext);
  const [editedItem, setEditedItem] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-[#D9D9D9]  w-[1000px] h-[300px] overflow-y-auto mx-auto">
      <div className="text-right m-2 p-2">
        <Button name="Delete all" type="delete" handleFunc={deleteAllItem} />
      </div>

      <ul className="p-6 ">
        {items.map((item, index) => (
          <li
            className="border-b-2 border-[#000000] p-2 my-3"
            key={index}
            onClick={() => {
              setShowButton(true);
              setInputValue(item);
            }}
          >
            {showButton && inputValue === item ? (
              <div className="flex w-full">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-[#D9D9D9] outline-none"
                />
                <Button type="delete" />
                <Button type="edit" />
              </div>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
