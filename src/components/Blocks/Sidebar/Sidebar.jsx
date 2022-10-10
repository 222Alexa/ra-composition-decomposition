import React from "react";

import SectionBlock from "../../Sections/SectionBlock";
import SectionBlockItem from "../../Sections/SectionBlockItem";

import { teaserData } from "../../../db/FakeData";

const USID = require("usid");
const usid = new USID();

const SideBar = () => {
  return (
    <React.Fragment>
      <div key={usid.rand()} className="sidebar-wrapper">
        <SectionBlock key={usid.rand()} className={"sidebar"}>
          {teaserData.map((item) => {
            return (
              <SectionBlockItem
                key={usid.rand()}
                {...item}
                type={item.type}
                className={"sidebar-item"}
              ></SectionBlockItem>
            );
          })}
        </SectionBlock>
      </div>
    </React.Fragment>
  );
};
export default SideBar;
