import React from "react";
import ReactDOM from "react-dom";
import { FixedSizeList as List } from "react-window";

import "./styles.css";

const arr = [];

function Row({ index, style }) {
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row {index}
    </div>
  );
}

const Example = () => (
  <List
    className="List"
    height={130}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);

ReactDOM.render(<Example />, document.getElementById("root"));
