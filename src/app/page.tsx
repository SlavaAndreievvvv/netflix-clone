import { Container, Navigation } from "@/ui/components";
import styles from "./page.module.css";

export const Home = () => {
  return (
    <section className={styles.container}>
      <Navigation username="df" className={styles.navigation} />
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Фільми та серіали</h1>
          <p className={styles.description}>
            Дивіться будь-де. Скасувати підписку можна будь-коли
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Home;
