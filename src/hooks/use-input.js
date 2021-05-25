import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return {
        ...state,
        value: action.value,
      };
    }
    case "TOUCHED": {
      return {
        ...state,
        isTouched: true,
      };
    }
    case "RESET": {
      return {
        isTouched: false,
        value: "",
      };
    }
    default:
      return state;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const valueIsInvalid = !valueIsValid && inputState.isTouched;

  const inputChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const touchedInputHandler = () => {
    dispatch({ type: "TOUCHED" });
  };

  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    inputError: valueIsInvalid,
    chandgeHandler: inputChangeHandler,
    touchHandler: touchedInputHandler,
    reset: resetInput,
    isTouched: inputState.isTouched,
    isValid: valueIsValid,
  };
};

export default useInput;
