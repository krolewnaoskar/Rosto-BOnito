import { createClient } from "next-sanity";
import { useState } from "react";
import styles from './Navbar.module.scss';
import logo from '../../assets/logo1.png';
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const Navbar = (navbar: any) => {
    const [navList, setNavList] = useState(navbar)
    console.log('NAV compoent')
    console.log(navbar);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_wrapper}>
                <div className={styles.hamburger}></div>
                <div className="social">
                    <FaFacebookSquare fontSize={30} />
                    <FaInstagramSquare fontSize={30} />
                </div>
                <ol className={styles.navbar_list}>    {navList && navList.navbar.map((item: any, index: any) => {
                    return (
                        <li key={index}>{item.link}</li>
                    )
                })}</ol>

                <div className="navbar_logo">
                    <Image
                        alt="Mountains"
                        // Importing an image will
                        // automatically set the width and height
                        src={logo}
                        sizes="100vw"
                        // Make the image display full width
                        style={{
                            width: '100%',
                            height: '90px',
                        }}
                    />
                </div>
            </div>
        </nav>
    )
}


export default Navbar