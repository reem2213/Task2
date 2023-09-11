import classes from "./MenuItem.module.css";
import React from "react";
const MenuItems = (props) => {
  return (
    <div className={classes["menubar-list"]}>
      <div className={classes["row"]}>
      <div className={classes["menubar-icon"]}>{props.icon1}</div>
        <div className={classes["icon"]}>{props.icon2}</div>
        <p className={classes["title"]}>{props.title}</p>
      </div>
    </div>
  );
};

export default MenuItems;
