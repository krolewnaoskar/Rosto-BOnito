import { ReactPropTypes } from "react";

import SectionTitle from "../section_title/SectionTitle";

import styles from "./Section.module.scss";
import MassageFaceComponent from "../masageFaceComponent/MassageFaceComponent";

const Section = (props: any) => {
  const data = props.massageData;
  const cssBackground = props.css;
  return (
    <section className={`${styles.section_main} ${styles[cssBackground]}`}>
      <SectionTitle
        name={props.name}
        description={props.description}
      ></SectionTitle>

      {props.children}
    </section>
  );
};

export default Section;
