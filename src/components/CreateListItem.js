import { useState } from "react";

function CreateListItem(props) {
  const [item, setItem] = useState("");
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };
  const handleAddItem = () => {
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    let formattedDate = month + "-" + day + "-" + year;
    props.addItemCallback({
      item: item,
      date: formattedDate,
      visible: true,
    });
    setItem("");
  };
  return (
    <div className="container">
      <div className="col-6">
        <div className="input-group m-3">
          <input
            type="text"
            placeholder="Add a new Item"
            name="addItem"
            id="addItem"
            className="form-control"
            value={item}
            onChange={handleItemChange}
          />
          <button className="btn btn-success" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateListItem;
