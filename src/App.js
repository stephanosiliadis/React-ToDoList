import ToDoList from "./components/ToDoList";
import CreateListItem from "./components/CreateListItem";

function App() {
  const newListItem = (listItem) => {
    console.log(listItem);
  };

  return (
    <div className="App">
      <div className="container">
        <ToDoList />
        <CreateListItem addItemCallback={newListItem} />
      </div>
    </div>
  );
}

export default App;
