import styles from './Header.module.scss';

const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <h1>Header Title</h1>
            <h2>Header Description</h2>
        </header>
    )
}

export default Header;