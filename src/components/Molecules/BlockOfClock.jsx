import React from "react";
import { Link } from "../Atoms/Atoms";

import moment from "moment";
import "moment/locale/ru";
const USID = require("usid");
const usid = new USID();

export default function Clock() {
 
  const data = {
    date: moment(Date.now()).format("DD MMMM"),
    currentDay:moment(Date.now()).format("dddd"),
    time: moment(Date.now()).format("h:mm"),
  };
  

  return (
    <>
      <div className="clock-wrapper">
        <Link
          key={usid.rand()}
          {...data}
          text={data.date}
          tag={"span"}
          className={"date"}
        />
                <Link
          key={usid.rand()}
          {...data}
          text={data.currentDay}
          tag={"span"}
          className={"current-day"}
        />
        <Link
          key={usid.rand()}
          {...data}
          text={data.time}
          tag={"span"}
          className={"time"}
        />
      </div>
    </>
  );
}
