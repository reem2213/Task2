import NavBar from "../NavBar/NavBar";
import Card from "../UI/Card/Card";
import classes from "./EditPost.module.css";
import Image from "../../assets/spain.jpg";
import Data from "./data.json";

const EditPost = () => {
  return (
    <div>
      <NavBar />
      <Card className={classes["card"]}>
        {Data.map((data) => {
          return (
            <div className={classes["h2"]} key={data.id}>
              {data.h2}
              <div className={classes["p"]}>{data.p}</div>
            </div>
          );
        })}
      </Card>

      <Card className={classes["card2"]}>
        <h1>🖼️Preview Card</h1>
      </Card>

      <Card className={classes["card3"]}>
      {Data.map((data) => {
          return <div className={classes["p"]}>{data.pImage}</div>;
        })}

        <Card className={classes["card4"]}>
          <img src={Image} alt="spain" />
        </Card>
        {Data.map((data) => {
          return <div className={classes["span"]}>{data.span}</div>;
        })}
        {Data.map((data) => {
          return <div className={classes["e"]}>{data.p2}</div>;
        })}

        <Card className={classes["card5"]}>
          {Data.map((data) => {
            return <div className={classes["span2"]}>{data.span2}</div>;
          })}
        </Card>
      </Card>
    </div>
  );
};
export default EditPost;
