import { useRef } from "react";

export function useMyCustomHook() {
  const inputRef = useRef({ counter: 0 });

  const handleClick = () => {
    // inputRef.current.focus();
    // inputRef.current.style.backgroundColor = "blue";
    inputRef.current.counter = inputRef.current.counter + 1;
    console.log(inputRef.current.counter);
  };

  return {
    handleClick,
  };
}
