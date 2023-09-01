function ToDoList(props) {
  const showItems = (listItem, index) => {
    return (
      <tr key={index}>
        <td>{listItem.item}</td>
        <td>{listItem.date}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteItemCallback(listItem)}
          >
            Delete Item
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="m-3">
      <h3>
        Your To-Do List
        <img src="/list.png" alt="to-do-list" />
      </h3>
      <table border={1} className="table table-striped m-3">
        <thead>
          <tr>
            <th>Item</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{props.items.map(showItems)}</tbody>
      </table>
    </div>
  );
}

export default ToDoList;
