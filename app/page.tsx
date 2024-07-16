import Image from "next/image";
import styles from "./page.module.css";
import UserButton from "./compose/userButton/userButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserButton/>
    </main>
  );
}
