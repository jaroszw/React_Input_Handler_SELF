import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEneteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueIsInvalid = !valueIsValid && isTouched;

  const inputChangeHandler = (e) => {
    setEneteredValue(e.target.value);
  };

  const touchedInputHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setIsTouched(false);
    setEneteredValue("");
  };

  return {
    value: enteredValue,
    inputError: valueIsInvalid,
    chandgeHandler: inputChangeHandler,
    touchHandler: touchedInputHandler,
    reset: resetInput,
    isTouched: isTouched,
    IsValid: valueIsValid,
  };
};

export default useInput;
