import React from "react";
import Services from "./Services";
import { servicesTitle, widgetTitles } from "../../../db/FakeData";
import Widgets from "./Widgets";

const USID = require("usid");
const usid = new USID();

const Main = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <Services
          key={usid.rand()}
          data={servicesTitle}
          type="services"
        ></Services>
        <Widgets key={usid.rand()} data={widgetTitles} type="widgets"></Widgets>
      </div>
    </React.Fragment>
  );
};

export default Main;

/**       
 *         <div className="sevices-container">
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
        </SectionBlock> */
