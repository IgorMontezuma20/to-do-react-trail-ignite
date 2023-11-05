import { ButtonScrollToTop } from "../ButtonScrollToTop/ButtonScrollToTop";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>
        Desenvolvido por
        <a href="https://github.com/IgorMontezuma20">Igor Montezuma</a>
      </p>
      <ButtonScrollToTop />
    </footer>
  );
}
