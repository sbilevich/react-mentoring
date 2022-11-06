import { Logo } from "components/logo/logo";
import styles from './footer-component.module.scss'

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <Logo />
    </footer>
)