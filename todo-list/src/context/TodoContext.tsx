import { createContext, useContext, useState } from "react";

interface IContext {
  items?: Array<string>;
  addItem?: (text: string) => void;
  deleteItem: (index) => void;
  deleteAllItem: () => void;
  editItem: (text: string, index) => void;
}
export const TodoContext = createContext<IContext>({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
  deleteAllItem: () => {},
  editItem: () => {},
});

export function TodoContextProvider(props) {
  const [itemList, setItemList] = useState<Array<string>>([]);

  function addItemHandler(text) {
    const newArr = [...itemList];
    newArr.push(text);
    setItemList(newArr);
  }

  function deleteItemHandler(indexItem) {
    const newArr = [...itemList];
    const findIndex = newArr.findIndex((i, index) => index === indexItem);
    if (findIndex !== -1) {
      newArr.splice(findIndex, 1);
      setItemList(newArr);
    }
  }

  function editItemHandler(text, indexItem) {
    const newArr = [...itemList];
    const findIndex = newArr.findIndex((i, index) => index === indexItem);
    newArr[findIndex] = text;

    setItemList(newArr);
  }

  function deleteAllItemHandler() {
    setItemList([]);
  }

  const contextValue: IContext = {
    items: itemList,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    deleteAllItem: deleteAllItemHandler,
    editItem: editItemHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
}
