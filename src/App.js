import { useState } from "react";
import ToDoList from "./components/ToDoList";
import CreateListItem from "./components/CreateListItem";

import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const newListItem = (listItem) => {
    let requestOptions = {
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

  return (
    <div className="App">
      <div className="container">
        <ToDoList items={listItems} />
        <CreateListItem addItemCallback={newListItem} />
      </div>
    </div>
  );
}

export default App;
