import React from "react";
import { Link, Icon, LinkImg } from "../Atoms/Atoms";

const USID = require("usid");
const usid = new USID();

const SectionBlockItem = (props) => {
  console.log(props, "SectionBlockItem");

  return (
    <div key={usid.rand()} className={props.className + "-card"}>
      <div key={usid.rand()} className={props.className + "-header"}>
        {props.imageData && (
          <LinkImg key={usid.rand()} {...props} className="image" />
        )}
        <Link
          key={usid.rand()}
          {...props}
          text={props.title}
          tag="h5"
          className={props.className + "-title"}
        ></Link>
        {props.headerIcon && (
          <Icon key={usid.rand()} icon={props.headerIcon} type={props.type} />
        )}
      </div>
      <div key={usid.rand()} className={props.className + "-wrapper-content"}>
        {props.text.map((item) => {
          return (
            <div
              key={usid.rand()}
              className={
                props.className + "-content " + props.type + "__content-row"
              }
            >
              <Icon key={usid.rand()} icon={props.icon} type={props.type} />
              {item.time && (
                <Link
                  key={usid.rand()}
                  {...item}
                  text={item.time}
                  tag={"span"}
                  className={
                    props.type + "-timing " + props.className + "-timing"
                  }
                ></Link>
              )}
              <Link
                key={usid.rand()}
                {...item}
                text={item.name}
                tag={"span"}
                className={
                  props.type + "-text-link " + props.className + "-content-item"
                }
              ></Link>
              <Link
                key={usid.rand()}
                {...item}
                text={item.description}
                tag={"span"}
                className={
                  props.type +
                  "-description-link " +
                  props.className +
                  "-description"
                }
              ></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionBlockItem;
