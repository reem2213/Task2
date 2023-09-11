import { useState } from "react";
import classes from "./NavBar.module.css";
import Button from "../UI/Button/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const NavBar = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    console.log("hello");
    setIsButtonDisabled(isButtonDisabled);
  };
  return (
    <div className={classes.header}>
      <Button className={classes["navbar-button"]}>
        <ArrowBackIosIcon />
      </Button>
      <h1>Edit Post</h1>
      <span className={classes["post"]}>post</span>
      <span className={classes["status"]} />
      <span>Published</span>
      <CalendarMonthIcon className={classes["calendar-icon"]} />
        <Button
          className={classes["save-button"]}
          disabled={!isButtonDisabled}
          onClick={handleButtonClick}
        >
          Save
        </Button>
    </div>
  );
};
export default NavBar;
