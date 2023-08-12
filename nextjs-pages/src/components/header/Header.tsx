import styles from './Header.module.scss';
import logo from '../../assets/logo1.png';
import Image from "next/image";
import { FaRegCalendarAlt, FaPhoneAlt } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'

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
            <div className={styles.description}>
                <h2>JAPOŃSKI LIFTING TWARZY MASAŻE KLASYCZNE W KRAKOWIE</h2>
            </div>
            <div className={styles.description_second}>
                <h2>Każdy ruch to cel</h2>
            </div>
            <div className={styles.header_phone}>
                <p ><span className={styles.icon_phone}><FaPhoneAlt /></span>530907750</p> <a href="" className={styles.booksy_link}>Zarezerwuj <span className={styles.icon_calendar}><FaRegCalendarAlt /></span></a>
            </div>
        </header>
    )
}

export default Header;