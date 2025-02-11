import { FC } from "react";
import typeItem from "../../type/typeItem";
import styles from "./Item.module.scss";

interface IItemProps {
  el: typeItem;
  toggleItem: (id: number) => void;
}

const Item: FC<IItemProps> = ({ el, toggleItem }) => {
  const { text, id, done } = el;
  return (
    <div className={styles.wraper} onClick={() => toggleItem(id)}>
      <div className={styles.circul}>{done && <img src="img/done.svg" />}</div>
      <p
        className={[styles.paragraf, done === true && styles.completed].join(" ")} data-testid="item-paragraf"
      >
        {text}
      </p>
    </div>
  );
};

export default Item;
