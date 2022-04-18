import React from "react";
import { Input, Button } from "../Atoms/Atoms";
import Tooltype from "./Tooltype";


const Form = ({ data }) => {
  return (
    <React.Fragment>
      <div className="form-field-wrapper">
        <div className={data.type + "-forms"}>
          <Input data={data} />
          <Button data={data} />
        </div>
        <Tooltype />
      </div>
    </React.Fragment>
  );
};

export default Form;
