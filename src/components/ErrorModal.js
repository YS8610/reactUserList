import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
  const onClickHandler = () => {
    props.onClick(true);
  };

  return (
    <div className={classes.backdrop} onClick={onClickHandler}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.header || "Error"}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg || "message"}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClickHandler}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
