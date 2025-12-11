import { useCallback, useState } from "react";

export const useFormField = (initialValue = "", validator = () => true) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = useCallback((event) => {
    const { value } = event.target;

    if (!validator(value)) {
      setError("Not valid");
    } else {
      setError("");
    }

    setValue(value);
  });

  return {
    value,
    handleChange,
    error,
  };
};
