import { useState } from "react";
import { useFormField } from "../hooks/formField";

const isRequired = (value) => (Boolean(value) ? true : false);

function ControlledForm() {
  const {
    value: name,
    handleChange: handleNameChange,
    error: nameError,
  } = useFormField("", isRequired);
  const {
    value: password,
    handleChange: handlePasswordChange,
    error: passwordError,
  } = useFormField("");

  const handleSubmit = (event) => {
    const { name, password } = event.target;
    event.preventDefault();

    console.log(name);
    console.log(password.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <span>{nameError}</span>
      </label>
      <label>
        <span>Password:</span>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span>{passwordError}</span>
      </label>
      <button disabled={Boolean(nameError)}>Send</button>
    </form>
  );
}

export default ControlledForm;
