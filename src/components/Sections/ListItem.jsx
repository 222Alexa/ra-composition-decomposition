import React from "react";



const USID = require("usid");
const usid = new USID();
export default function ListItem({ type, children }) {
  return (
    <React.Fragment>
      <li className={type + "-item item-list"} key={usid.rand()}>
        {React.Children.map(children, (child) => {
          return child;
        })}
      </li>
    </React.Fragment>
  );
}
