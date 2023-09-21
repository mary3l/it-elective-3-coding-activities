import React from "react";

const Items = (props) => {
  return (
    <>
      {props.items
        .filter((item) => (props.showOnlyStock ? item.stock > 0 : item))
        .filter((item) => item.name.includes(props.query))
        .map((item) => (
          <tr
            key={item.id}
            onClick={() => alert(`${item.name} - ${item.price}`)}
          >
            <td>{item.name}</td>
            <td>{`$${item.price}`}</td>
          </tr>
        ))}
    </>
  );
};

export default Items;
