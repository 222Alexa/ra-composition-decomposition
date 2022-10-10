import React from "react";

import BlockImage from "../../Molecules/BlockImage";
import { LinkImg } from "../../Atoms/Atoms";
import Form from "../../Molecules/FormSearch";

import PropTypes from "prop-types";
const USID = require("usid");
const usid = new USID();

const Second = ({ data }) => {
  return (
    <React.Fragment>
      <div className="second">
        <BlockImage data={data.logo[0]}>
          <LinkImg
            key={usid.rand()}
            className={data.logo[0].type + "-fake"}
            {...data.logo[0]}
          />
        </BlockImage>
        <div className="forms-container">
          <Form data={data.form} />
        </div>

        <BlockImage data={data.banner[0]}>
          <LinkImg
            key={usid.rand()}
            className={data.banner[0].type + "-fake"}
            {...data.banner[0]}
          />
        </BlockImage>
      </div>
    </React.Fragment>
  );
};

export default Second;

Second.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.array.isRequired,
    form: PropTypes.object.isRequired,
    banner: PropTypes.array.isRequired,
  }),
};
