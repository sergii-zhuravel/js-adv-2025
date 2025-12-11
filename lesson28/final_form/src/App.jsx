import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Field, Form } from "react-final-form";

const TextFieldUI = ({ input, meta, ...restProps }) => (
  <>
    <TextField {...restProps} {...input} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </>
);

const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

function UserForm({ handleSubmit }) {
  // console.log(props);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        component={TextFieldUI}
        name="email"
        className="input"
        label="Email"
        margin="dense"
      />
      <Field
        component={TextFieldUI}
        name="password"
        className="input"
        label="Password"
        margin="dense"
      />

      <Button className="input" variant="outlined" type="submit">
        Send
      </Button>
    </form>
  );
}

function LoginForm() {
  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={UserForm}
      validate={validateLogin}
      initialValues={{ password: "God" }}
    />
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default App;
