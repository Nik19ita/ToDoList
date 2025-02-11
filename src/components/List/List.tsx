import { FC } from "react";
import typeItem from "../../type/typeItem";
import Item from "../Item/Item";
import styles from "./List.module.scss";

interface IListProps {
  list: typeItem[];
  toggleItem: (id: number) => void;
}

const List: FC<IListProps> = ({ list, toggleItem }) => {
  return (
    <ul className={styles.list} data-testid='list'>
      {list.map((el) => {
        return (
          <li className={styles.item} key={`list-${el.id}`} >
            <Item el={el} toggleItem={toggleItem} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
