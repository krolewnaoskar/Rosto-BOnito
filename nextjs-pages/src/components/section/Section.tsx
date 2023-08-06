import { ReactPropTypes } from "react";
import SectionTitle from "../section_title/SectionTitle";
import styles from './Section.module.scss'

const Section = (props: any) => {
    const cssBackground = props.css;
    return (
        <section className={`${styles.section_main} ${styles[cssBackground]}`}>
            <SectionTitle name={props.name} description={props.description}></SectionTitle>
        </section>
    )
}

export default Section