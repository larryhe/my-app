import classNames from "classnames";
import styles from "./category.module.css";
export type ProductType =
  | "Food"
  | "Technology"
  | "Entertainment"
  | "Shopping"
  | "Automotive"
  | "Travel";

export type CategoryType = { type: ProductType };

export function Category({ type }: CategoryType) {
  console.log(styles);
  return (
    <span
      className={classNames(styles.category, {
        [styles.entertainment]: type === "Entertainment",
        [styles.food]: type === "Food",
        [styles.technology]: type === "Technology",
        [styles.shopping]: type === "Shopping",
        [styles.automotive]: type === "Automotive",
        [styles.travel]: type === "Travel",
      })}
    >
      {type}
    </span>
  );
}
