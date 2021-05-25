import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/use-input";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const UserButton = styled.button`
  width: 80%;
  background-color: #ba135d;
  color: #f4cca4;
  border: none;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: ${(props) => (props.disabled ? "#333" : "")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  :hover {
    background-color: ${(props) => (props.disabled ? "#333" : "#99154e")};
  }
`;

const UserForm = styled.form`
  min-width: 3rem;
  height: 4rem;
  padding: 3rem;
  background-color: #d99879;
`;

const UserInput = styled.input`
  border: 1px solid ${(props) => (props.invalid ? "#e93b81" : "")};
  background-color: ${(props) => (props.invalid ? "#f5abc9" : "")};
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 5px;
  outline: none;
`;

const Input = () => {
  const {
    value: nameValue,
    inputError: nameHasError,
    chandgeHandler: nameChangeHandler,
    touchHandler: nameTouchedHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    inputError: emailHasError,
    chandgeHandler: emailChangeHandler,
    touchHandler: emailTouchedHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (emailValue && nameValue) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (nameHasError || emailHasError) {
      return;
    }

    nameReset();
    emailReset();
  };

  return (
    <Wrapper>
      <UserForm onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="">
            <UserInput
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameTouchedHandler}
              value={nameValue}
              invalid={nameHasError}
            />
          </label>
        </div>

        <div>
          <label htmlFor="">
            <UserInput
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailTouchedHandler}
              value={emailValue}
              invalid={emailHasError}
            />
          </label>
        </div>

        <div>
          <UserButton disabled={!formIsValid}>Submit</UserButton>
        </div>
      </UserForm>
    </Wrapper>
  );
};

export default Input;
