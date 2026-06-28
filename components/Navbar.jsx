import styles from "./Navbar.module.css"
import Link from "next/link";

export default function Navbar(){
    return (
    <nav className={styles.nav}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/departments">Departments</Link>
    <Link href="/contact">Contact</Link>
    </nav>
    );
}