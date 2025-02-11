import Todo from "../Todo/Todo";
import styles from "./TodoWraper.module.scss";

const TodoWraper = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles["layer-one"]} />
      <div className={styles["layer-two"]} />
      <Todo />
    </div>
  );
};

export default TodoWraper;
