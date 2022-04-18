import React from "react";
import PropTypes from "prop-types";

/**Блок подсказки  */

const Tooltype = (props) => {
  //console.log(props, "type");
  return (
    <React.Fragment>
      <div className={props.type + "-wrapper"}>
      <span className={props.type + "-label"}>{props.label}</span>
        <span className={props.type + "-text"}>{props.text}</span>
      </div>
    </React.Fragment>
  );
};

export default Tooltype;

Tooltype.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
Tooltype.defaultProps = {
  type: "tooltype",
  label:"Например, ",
  text: "я всегда ищу печеньки",
};
