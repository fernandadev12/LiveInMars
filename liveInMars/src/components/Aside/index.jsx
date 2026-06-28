import styles from "./aside.module.css";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h1>Vivendo em Marte</h1>
      <footer className={styles.footer}>
        Consumindo API da Nasa para fins educacionais
      </footer>
    </aside>
  );
};
