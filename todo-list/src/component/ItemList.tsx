import { useContext, useEffect, useState } from "react";
import Button from "../ui/button";
import { TodoContext } from "../context/TodoContext";

function ItemList() {
  const [showButton, setShowButton] = useState(false);
  const [editedItem, setEditedItem] = useState<Number>();
  const [inputValue, setInputValue] = useState<string>("");
  const { items, deleteAllItem, deleteItem, editItem } =
    useContext(TodoContext);
  function editedItemHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) {
    e.stopPropagation();
    editItem(inputValue, index);
    setShowButton(false);
    setInputValue("");
    setEditedItem(null);
  }

  return items.length ? (
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
              setEditedItem(index);
              setInputValue(item);
            }}
          >
            {showButton && editedItem === index ? (
              <div className="flex w-full">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-[#D9D9D9] outline-none"
                />
                <Button type="delete" handleFunc={() => deleteItem(index)} />
                <Button
                  type="edit"
                  handleFunc={(e) => editedItemHandler(e, index)}
                />
              </div>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default ItemList;
