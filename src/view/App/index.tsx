import React from "react";
import styles from "./index.module.css";
import { useWishesStore } from "../../data/stores/useWishesStore";

export const App: React.FC = () => {
  const [wishes, createWish, updateWish, removeWish] = useWishesStore(
    (state) => [
      state.wishes,
      state.createWish,
      state.updateWish,
      state.removeWish,
    ]
  );
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Wish List</h1>
      <section className={styles.articleSection}></section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
