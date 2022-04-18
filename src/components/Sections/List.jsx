import React from "react";

export default function List({ className, children }) {
  return (
    <React.Fragment>
      <ul className={className + "__list"}>
        {React.Children.map(children, (child, idx) => {

          return child;
        })}
      </ul>
    </React.Fragment>
  );
}
