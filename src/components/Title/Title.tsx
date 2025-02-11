import { FC } from "react";
import styles from "./Title.module.scss";

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({ title }) => {
  return <h2 className={styles.h2} data-testid='title'>{title}</h2>;
};

export default Title;
