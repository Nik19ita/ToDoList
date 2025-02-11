import typeItem from "../type/typeItem";
import typeStateTodo from "../type/typeStateTodo";

const getListForRender = (active: typeStateTodo, list: typeItem[]) => {
  if (active === "active") {
    return list.filter((item) => item.done === false);
  }

  if (active === "completed") {
    return list.filter((item) => item.done === true);
  }

  return list;
};

export default getListForRender;
