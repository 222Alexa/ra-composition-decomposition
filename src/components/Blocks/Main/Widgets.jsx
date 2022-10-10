import React from "react";
import SectionBlock from "../../Sections/SectionBlock";
import SectionBlockItem from "../../Sections/SectionBlockItem";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const Widgets = ({ data, type }) => {
  return (
    <React.Fragment>
      <SectionBlock key={usid.rand()} className={type}>
        {data.map((item) => {
          return (
            <SectionBlockItem
              key={usid.rand()}
              {...item}
              type={item.type}
              className={"widget"}
            ></SectionBlockItem>
          );
        })}
      </SectionBlock>
    </React.Fragment>
  );
};

export default Widgets;
Widgets.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  };
