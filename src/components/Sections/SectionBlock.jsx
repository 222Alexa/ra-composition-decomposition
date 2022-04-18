import React from "react";

export default function SectionBlock({ className, children }) {
  //console.log(children, "blockWidget");

  return (
    <React.Fragment>
      <div className={className + "-container"}>
        {React.Children.map(children, (child) => {
          return child;
        })}
      </div>
    </React.Fragment>
  );
}
