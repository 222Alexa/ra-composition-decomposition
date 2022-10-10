import React from "react";
import List from "../../Sections/List";
import ListItem from "../../Sections/ListItem";
import { Link } from "../../Atoms/Atoms";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const Currency = ({ data, type }) => {

  return (
    <React.Fragment>
              <div key={usid.rand()} className={type + "-list-wrapper"}>
        <List key={usid.rand()} className={type}>
          {data.map((item) => {
            return (
              <ListItem key={usid.rand()} {...item} type={item.type}>
                <Link
                  key={usid.rand()}
                  {...item}
                  text={item.title}
                  tag={"span"}
                  className={item.type + "-item"}
                ></Link>
                <Link
                  key={usid.rand()}
                  {...item}
                  text={item.value}
                  tag={"span"}
                  className={item.type + "-item"}
                ></Link>
              </ListItem>
            );
          })}
        </List>
      </div>
    </React.Fragment>)}

    export default Currency;

    Currency.propTypes = {
        type: PropTypes.string.isRequired,
      
        data: PropTypes.array.isRequired,
      };