import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    inputError: nameIsInvalid,
    chandgeHandler: nameInputChangeHandler,
    touchHandler: nameTouchedInputHandler,
    reset: nameResetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastnameValue,
    isValid: lastnameIsValid,
    inputError: lastnameIsInvalid,
    chandgeHandler: lastnameInputChangeHandler,
    touchHandler: lastnameTouchedInputHandler,
    reset: lastnameResetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    inputError: emailIsInvalid,
    chandgeHandler: emailInputChangeHandler,
    touchHandler: emailTouchedInputHandler,
    reset: emailResetInput,
  } = useInput((value) => value.includes("@"));

  console.log(emailIsInvalid);

  const nameIsValidClass = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastnameIsValidClass = lastnameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const passwordIsValidClass = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  const onSubmitHandler = (e) => {
    console.log("Working");
    e.preventDefault();
    nameTouchedInputHandler();
    lastnameTouchedInputHandler();
    emailTouchedInputHandler();

    // if (!nameIsValid || !lastnameIsValid || !emailIsValid) {
    //   console.log("INVALID");
    //   return;
    // }
    nameResetInput();
    lastnameResetInput();
    emailResetInput();
  };

  let formIsValid = false;

  if (nameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameIsValidClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={lastnameValue}
            onChange={lastnameInputChangeHandler}
            onBlur={nameTouchedInputHandler}
          />
        </div>
        <div className={lastnameIsValidClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameInputChangeHandler}
            onBlur={lastnameTouchedInputHandler}
          />
        </div>
      </div>
      <div className={passwordIsValidClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailInputChangeHandler}
          onBlur={emailTouchedInputHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
