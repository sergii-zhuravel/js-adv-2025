function UncontrolledForm() {
  const handleSubmit = (event) => {
    const { name, password } = event.target;
    event.preventDefault();

    console.log(name.value);
    console.log(password.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input type="text" name="name" id="name" />
      </label>
      <label>
        <span>Password:</span>
        <input type="text" name="password" id="password" />
      </label>
      <button>Send</button>
    </form>
  );
}

export default UncontrolledForm;
