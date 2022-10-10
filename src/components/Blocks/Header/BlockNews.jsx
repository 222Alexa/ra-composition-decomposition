import React from "react";
import List from "../../Sections/List";
import ListItem from "../../Sections/ListItem";
import { Link } from "../../Atoms/Atoms";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const BlockNews = ({ data, type }) => {
  console.log(data, "dataNews");
  return (
    <React.Fragment>
      <div key={usid.rand()} className={type + "-wrapper"}>
        <List key={usid.rand()} className={type}>
          {data.map((item) => {
            return (
              <ListItem key={usid.rand()} {...item} type={item.type}>
                <Link
                  key={usid.rand()}
                  {...item}
                  text={item.title}
                  tag={"h5"}
                  className={item.type}
                ></Link>
              </ListItem>
            );
          })}
        </List>
      </div>
    </React.Fragment>
  );
};
export default BlockNews;

BlockNews.propTypes = {
  type: PropTypes.string.isRequired,

  data: PropTypes.array.isRequired,
};
