import React from "react";

import PropTypes from "prop-types";

/**Изображение со ссылкой */
export const LinkImg = (props) => {
  if (!props) {
    return null;
  }

  const classes = props.className + "-link link__" + props.type;
  return (
    <>
      <a className={classes} href={props.url} target="blanc">
        <img
          className={props.type + "-image " + props.className + "-image"}
          src={props.imageData.url}
          alt={props.imageData.description}
        />
      </a>
    </>
  );
};

LinkImg.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageData: PropTypes.object.isRequired,
  }),
};

/**Текстовая ссылка */

export const Link = (props) => {
  if (!props) {
    return null;
  }

  //console.log(props, "link");

  const classes = props.className + "-link";
  let result = React.createElement(
    props.tag,
    { className: props.className + "-text" },
    props.text
  );

  return (
    <>
      <a className={classes} href={props.url} target="blanc">
        {result}
      </a>
    </>
  );
};
Link.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }),
};

Link.defaultProps = {
  url: "#",
};

/**иконка источника новости в новостной панели/иконка виджета или блока в виджете */
export const Icon = ({ icon, type }) => {
  if (!icon) {
    return;
  }
  return (
    <>
      <div className={type + "__icon-wrapper"}>
        <div
          className={type + "__icon"}
          style={{ backgroundImage: "url(" + icon + ")" }}
        ></div>
      </div>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
};

/**Поле ввода в форме поиска */
export const Input = ({ data, tooltype }) => {
  return (
    <React.Fragment>
      <input
        className={data.name + "__input"}
        type={data.type}
        name={data.name}
        icon={data.icon}
        placeholder="Поищем печеньки?"
      />
      <label className="label" name={data.name}></label>
    </React.Fragment>
  );
};

Input.propTypes = {
  data: PropTypes.object.isRequired,
};

/**Кнопка */
export const Button = ({ data }) => {
  return (
    <React.Fragment>
      <button className={data.name + "__btn"}>{data.text}</button>
    </React.Fragment>
  );
};
Button.propTypes = {
  data: PropTypes.object.isRequired,
};

