import { useState } from "react";
import getListForRender from "../../helpers/getListForRender";
import typeItem from "../../type/typeItem";
import typeStateTodo from "../../type/typeStateTodo";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import styles from "./Todo.module.scss";

const Todo = () => {
  const [list, setList] = useState<typeItem[]>([]);
  const [activeNavButton, setActiveNavButton] = useState<typeStateTodo>("all");

  const addItem = (inputValue: string) => {
    setList((list) => [
      ...list,
      {
        id: Date.now(),
        text: inputValue,
        done: false,
      },
    ]);
  };

  const toggleItem = (id: number) => {
    const newList = [...list];
    newList.forEach((el) => {
      if (el.id === id) {
        el.done = !el.done;
      }
    });
    setList(newList);
  };

  const clickNavActive = (name: typeStateTodo) => {
    setActiveNavButton(name);
  };

  const clearListCompleted = () => {
    setList(list.filter((item) => item.done === false));
  };

  return (
    <div className={styles.todo}>
      <Input addItem={addItem} />
      <List
        list={getListForRender(activeNavButton, list)}
        toggleItem={toggleItem}
      />

      <div className={styles.bottom}>
        <p>{`${list.length} items left`}</p>

        <div className={styles.buttons}>
          <Button
            name="all"
            active={activeNavButton}
            onClick={() => clickNavActive("all")}
            text="All"
          />
          <Button
            name="active"
            active={activeNavButton}
            onClick={() => clickNavActive("active")}
            text="Active"
          />

          <Button
            name="completed"
            active={activeNavButton}
            onClick={() => clickNavActive("completed")}
            text="Completed"
          />
        </div>

        <Button onClick={clearListCompleted} text="Clear completed" />
      </div>
    </div>
  );
};

export default Todo;
