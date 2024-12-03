import { formatDate, formatDollar } from "@/utils/helper";
import { MoreVertical } from "react-feather";
import { Category, ProductType } from "./Category";
import styles from "./Table.module.css";

export type Product = {
  category: string;
  description: string;
  id: number;
  location: string;
  name: string;
  price: number;
  purchaseDate: string;
};

export type TableProps = {
  productList: Product[];
};

export function Table({ productList }: TableProps) {
  return (
    <table className={styles.grid}>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Purchase Date</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {productList.map((item) => (
          <tr className={styles.card} key={item.id}>
            <td className={styles.name}>{item.name}</td>
            <td className={styles.icon}>
              <img src={item.location} alt={item.name} />
            </td>
            <td className={styles.date}>
              <b>Purchase Date</b>
              {formatDate(item.purchaseDate)}
            </td>
            <td className={styles.category}>
              <Category type={item.category as ProductType} />
            </td>
            <td className={styles.description}>{item.description}</td>
            <td className={styles.price}>{formatDollar(item.price)}</td>
            <td className={styles.action}>
              <MoreVertical aria-hidden="true" size={16} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
