import React from "react";

import List from "./Sections/List";
import ListItem from "./Sections/ListItem";
import SectionBlock from "./Sections/SectionBlock";
import SectionBlockItem from "./Sections/SectionBlockItem";
import { Link } from "./Atoms/Atoms";
import { servicesTitle, widgetTitles } from "../db/FakeData";

const USID = require("usid");
const usid = new USID();

const Main = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="sevices-container">
          <List key={usid.rand()} className={"services"}>
            {servicesTitle.map((item) => {
              return (
                <ListItem key={usid.rand()} {...item} type={item.type}>
                  <Link
                    key={usid.rand()}
                    {...item}
                    text={item.title}
                    tag={"h5"}
                    className={item.type+"-item"}
                  ></Link>
                </ListItem>
              );
            })}
          </List>
        </div>
        
        <SectionBlock key={usid.rand()} className={"widgets"}>
          {widgetTitles.map((item) => {
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
       
      </div>
    </React.Fragment>
  );
};

export default Main;

