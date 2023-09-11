import React from "react";

import classes from "./MenuBar.module.css";
import MenuItems from "./MenuItems/MenuItems";
import Button from "../UI/Button/Button";

const MenuBar = () => {
  const clickHandler = () => {
    console.log("Hello");
  };
  return (
    <div className={classes["menu-bar"]}>
      <ul className={classes["menubar-list"]}>
        {MenuItems.map((val, key) => {
          return (
            <li
              className={classes['row']}
              key={key}
              // onClick={() => {
              //   window.location.pathname = val.link;
              // }}
            >
              <div className={classes["menubar-icon"]}>{val.icon1}</div>
              <div className={classes["icon"]}>{val.icon2}</div>
              <div className={classes["title"]}>{val.title}</div>
            </li>
          );
        })}
      </ul>
      {/* <MenuItems/> */}
      <Button className={classes['add-button']} onClick={clickHandler}>
        + Add menu Item..
      </Button>
    </div>
  );
};
export default MenuBar;
