import React from "react";
import Clock from "./Molecules/BlockOfClock";
import {
  newsData,
  NavNewsData,
  currencyData,
  formSearchData,
  logoData,
  bannersData,
} from "../db/FakeData";
import List from "./Sections/List";
import ListItem from "./Sections/ListItem";
import BlockImage from "./Molecules/BlockImage";

import Form from "./Molecules/FormSearch";
import { Link, Icon, LinkImg } from "./Atoms/Atoms";

const USID = require("usid");
const usid = new USID();

const Header = () => {
  return (
    <React.Fragment>
      <div key={usid.rand()} className="nav-news-wrapper">
        <List key={usid.rand()} className={"nav-news"}>
          {NavNewsData.map((item) => {
            
            return (
              <ListItem key={usid.rand()} {...item} type={item.type}>
                <Link
                  key={usid.rand()}
                  {...item}
                  text={item.title}
                  tag={"h3"}
                  className={item.type}
                ></Link>
              </ListItem>
            );
          })}
        </List>
      </div>
      <Clock />
      <div key={usid.rand()} className="news-list-wrapper">
        <List key={usid.rand()} className={"block-news"}>
          {newsData.map((item) => {
            return (
              <ListItem key={usid.rand()} {...item} type={item.type}>
                <Icon key={usid.rand()} icon={item.icon} type={item.type} />
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
      <div key={usid.rand()} className="currency-list-wrapper">
        <List key={usid.rand()} className={"currency"}>
          {currencyData.map((item) => {
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
      <div className="second">
        <BlockImage data={logoData[0]}>
          <LinkImg
            key={usid.rand()}
            className={logoData[0].type + "-fake"}
            {...logoData[0]}
          />
        </BlockImage>
        <div className="forms-container">
          <Form data={formSearchData} />
        </div>

        <BlockImage data={bannersData[0]}>
          <LinkImg
            key={usid.rand()}
            className={bannersData[0].type + "-fake"}
            {...bannersData[0]}
          />
        </BlockImage>
      </div>
    </React.Fragment>
  );
};

export default Header;
