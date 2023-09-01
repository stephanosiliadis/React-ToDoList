import { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import CreateListItem from "./components/CreateListItem";

import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listItems")
      .then((response) => response.json())
      .then((responseData) => {
        setListItems(responseData);
      });
  }, []);

  const newListItem = (listItem) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listItem),
    };
    fetch("http://localhost:3000/listItems", requestOptions)
      .then((response) => response.json())
      .then((responseData) =>
        setListItems((prevListItems) => [...prevListItems, responseData])
      );
  };

  const deleteListItem = (listItem) => {
    let deleteItem = window.confirm(`Do you want to delete ${listItem.item} from your list?`);
    if (deleteItem) {
      const requestOptions = {
        method: "DELETE",
      };
      fetch(
        `http://localhost:3000/listItems/${listItem.id}`,
        requestOptions
      ).then(() => {
        setListItems(listItems.filter((item) => item.id !== listItem.id));
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <ToDoList items={listItems} deleteItemCallback={deleteListItem} />
        <CreateListItem addItemCallback={newListItem} />
      </div>
    </div>
  );
}

export default App;
