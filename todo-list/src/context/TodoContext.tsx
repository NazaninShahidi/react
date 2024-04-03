import { createContext, useContext, useState } from "react";

interface IContext {
  items?: Array<string>;
  addItem?: (text: string) => void;
  deleteItem: (index) => void;
  deleteAllItem: () => void;
  // editItem: () => void;
}
export const TodoContext = createContext<IContext>({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
  deleteAllItem: () => {},
  // editItem: () => {},
});

export function TodoContextProvider(props) {
  const [itemList, setItemList] = useState<Array<string>>([]);

  function addItemHandler(text) {
    const newArr = [...itemList];
    newArr.push(text);
    setItemList(newArr);
  }

  function deleteItemHandler(index) {
    console.log(index);
  }

  function deleteAllItemHandler() {
    setItemList([]);
  }

  const contextValue: IContext = {
    items: itemList,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    deleteAllItem: deleteAllItemHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
}
