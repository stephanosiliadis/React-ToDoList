import { useState } from "react";
import ToDoList from "./components/ToDoList";
import CreateListItem from "./components/CreateListItem";

import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const newListItem = (listItem) => {
    setListItems((prevListItems) => [...prevListItems, listItem]);
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
