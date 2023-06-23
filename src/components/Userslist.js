import Card from "./Card";
import classes from "./userList.module.css";

const Userslist = (props) => {
  console.log(props.userInfo);

  return (
    <Card className={classes.users}>
      <ul>
        {props.userInfo.length > 0 &&
          props.userInfo.map((x, index) => (
            <li key={index}>{`${x.n}  ${x.a} years old`}</li>
          ))}
      </ul>
    </Card>
  );
};

export default Userslist;
