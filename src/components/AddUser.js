import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import classes from "./addUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [valid, setValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("error");
  const [errorTitle, setErrorTitle] = useState("Invalid");

  const usernameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim().length === 0 && enteredUserName.trim().length === 0) {
      setValid(false);
      setErrorMsg("length of name or age cannot be 0");
      setErrorTitle("Invalid Input");
      return;
    }
    if (+enteredAge <= 0) {
      setValid(false);
      setErrorMsg("age must be more than 0");
      setErrorTitle("Invalid age");
      return;
    }
    props.onAddUser({ n: enteredUserName, a: enteredAge });

    setEnteredAge("");
    setEnteredUserName("");
  };

  const errorModalClick = (event) => {
    setValid(true);
  };

  return (
    <Card className={classes.input}>
      {!valid && (
        <ErrorModal
          msg={errorMsg}
          header={errorTitle}
          onClick={errorModalClick}
        />
      )}
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={usernameHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={ageHandler}
          value={enteredAge}
        />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
