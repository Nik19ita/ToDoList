import { FC } from "react";
import typeStateTodo from "../../type/typeStateTodo";
import styles from "./Button.module.scss";

interface IButtonProps {
  name?: typeStateTodo;
  active?: typeStateTodo;
  onClick: () => void;
  text: string;
}

const Button: FC<IButtonProps> = ({ active, onClick, name, text }) => {
  const activeStyle = active && active === name;
  return (
    <button
      className={[styles.button, activeStyle && styles.active].join(" ")}
      onClick={onClick}
      data-testid={`button-${name}`}
    >
      {text}
    </button>
  );
};

export default Button;
