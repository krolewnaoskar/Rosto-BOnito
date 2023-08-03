import styles from './Header.module.scss';
import logo from '../../assets/logo1.png';
import Image from "next/image";

const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_title}>
                <Image
                    alt="Mountains"
                    // Importing an image will
                    // automatically set the width and height
                    src={logo}
                    sizes="100vw"
                    // Make the image display full width
                    style={{
                        width: '200px',
                        height: 'auto',
                    }}
                />
                <div className={styles.content_title}>
                    <h1 className={styles.main_title}>ROSTO BONITO</h1>
                    <h2>Magdalena Zathey</h2>
                </div>

            </div>



        </header>
    )
}

export default Header;