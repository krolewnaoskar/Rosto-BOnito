import { createClient } from "next-sanity";
import { useState } from "react";

const Navbar = (navbar: any) => {
    const [navList, setNavList] = useState(navbar)
    console.log('NAV compoent')
    console.log(navbar);
    return (
        <nav>
            <div className="nav_wrapper">
                <div className="nav_logo"></div>
                <ol>    {navList && navList.navbar.map((item: any, index: any) => {
                    return (
                        <li key={index}>{item.link}</li>
                    )
                })}</ol>
            </div>


        </nav>
    )
}


export default Navbar