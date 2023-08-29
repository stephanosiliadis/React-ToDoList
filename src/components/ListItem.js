import { useState } from "react";

function ListItem(props) {
  const [visible, setVisible] = useState(true);

  const updateVisible = (visible) => {
    setVisible(visible);
  };

  return (
    <tr>
      <td>{props.item}</td>
      <td>{props.date}</td>
      <td>{visible}</td>
    </tr>
  );
}

export default ListItem;
