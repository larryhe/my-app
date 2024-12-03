import { useEffect, useState } from "react";
import { Table, Product } from "@/component/Table";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState<Product[]>([]);
  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data);
      });
  }, []);
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Purchases</h1>
      <Table productList={list} />
    </div>
  );
}
