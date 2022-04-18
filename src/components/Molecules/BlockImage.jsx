import React from "react";




const USID = require("usid");
const usid = new USID();

const BlockImage= ({data, children}) => {

   
  return (
    <React.Fragment>
      <div className={data.type +"-container"} key={usid.rand()}>
       {children}
      </div>
    </React.Fragment>
  );
};

export default BlockImage;