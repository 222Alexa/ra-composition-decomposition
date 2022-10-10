import React from "react";
import NavNews from "./NavNews";
import Clock from "../../Molecules/BlockOfClock";
import BlockNews from "./BlockNews";
import Currency from "./Currency";
import Second from "./Second";
import {
  newsData,
  NavNewsData,
  currencyData,
  formSearchData,
  logoData,
  bannersData,
} from "../../../db/FakeData";

const USID = require("usid");
const usid = new USID();

const Header = () => {
  return (
    <React.Fragment>
      <NavNews key={usid.rand()} data={NavNewsData} type="nav-news"></NavNews>
      <Clock />
      <BlockNews
        key={usid.rand()}
        data={newsData}
        type="block-news"
      ></BlockNews>
      <Currency
        key={usid.rand()}
        data={currencyData}
        type="currency"
      ></Currency>
      <Second
        key={usid.rand()}
        data={{ logo: logoData, form: formSearchData, banner: bannersData }}
      ></Second>
    </React.Fragment>
  );
};

export default Header;
