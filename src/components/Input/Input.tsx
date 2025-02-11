import { FC, useRef, useState } from "react";
import styles from "./Input.module.scss";

interface IInputProp {
  addItem: (inputValue: string) => void;
}

const Input: FC<IInputProp> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");
  const refInput = useRef<HTMLInputElement>(null);

  const onClick = () => {
    refInput.current !== null && refInput.current.focus();
    if (inputValue.trim() !== "") {
      addItem(inputValue.trim());
      setInputValue("");
    }
  };

  const onKeyEnter = (event: { key: string }) => {
    if (inputValue.trim() !== "" && event.key === "Enter") {
      addItem(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className={styles.wraper}>
      <input
        className={styles.input}
        type="text"
        placeholder="What's needs to be done?"
        value={inputValue}
        onKeyDown={onKeyEnter}
        onChange={(e) => setInputValue(e.target.value)}
        ref={refInput}
        data-testid="input"
      />
      {inputValue !== "" && (
        <button
          className={styles.button}
          onClick={onClick}
          data-testid="button-add"
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Input;
