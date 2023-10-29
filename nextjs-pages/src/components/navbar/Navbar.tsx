import { createClient } from "next-sanity";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo1.png";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = (navbar: any) => {
  const [navList, setNavList] = useState(navbar);
  const [menu, setMenu] = useState(false);

  const menuTrigger = () => {
    setMenu(!menu);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger}>
        <FiMenu fontSize={26} onClick={menuTrigger} />
      </div>
      <div
        className={
          menu
            ? `${styles.navbar_wrapper}`
            : `${styles.navbar_wrapper} ${styles.navbar_wrapper_active}`
        }
      >
        <div className={styles.social}>
          <a href="https://www.facebook.com/profile.php?id=100089487401402">
            <FaFacebookSquare fontSize={30} />
          </a>
          <a href="https://instagram.com/rosto_bonito_massage?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            {" "}
            <FaInstagram fontSize={30} className="icon_insta" />
          </a>
        </div>
        <ol className={styles.navbar_list}>
          {" "}
          {navList &&
            navList.navbar.map((item: any, index: any) => {
              return <li key={index}>{item.link}</li>;
            })}
        </ol>

        <div className="navbar_logo">
          <Image
            alt="Mountains"
            // Importing an image will
            // automatically set the width and height
            src={logo}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "90px",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
