import ListItem from "./ListItem";

function ToDoList(props) {
  const displayListItems = (listItem) => {
    <ListItem
      item={listItem.item}
      date={listItem.date}
      state={listItem.state}
    />;
  };
  return (
    <div className="m-3">
      <h3>Your To-Do List:</h3>
      <table border={1} className="m-3">
        <thead>
          <tr>
            <th>Item</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{displayListItems}</tbody>
      </table>
    </div>
  );
}

export default ToDoList;
