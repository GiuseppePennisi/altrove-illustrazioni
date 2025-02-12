import styles from './navbar.module.css';
export function Navbar() {
    return (
        <header className="fixed flex items-center justify-center px-[12%] py-7 right-0 top-0 w-full z-1000">
            <ul className={`${styles.navbar} flex mx-auto space-x-20`}>
                <li>
                    <a className={styles['navigation-link']} href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a className={styles['navigation-link']} href="#">
                        About
                    </a>
                </li>
                <li>
                    <a className={styles['navigation-link']} href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;
