import { useState } from "react";

function CreateListItem(props) {
  const [item, setItem] = useState("");
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };
  const handleAddItem = () => {
    props.addItemCallback(item);
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
          />+
          <button className="btn btn-success" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateListItem;
