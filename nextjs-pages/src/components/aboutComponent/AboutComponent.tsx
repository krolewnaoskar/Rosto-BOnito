import { useState } from "react";
import SectionTitle from "../section_title/SectionTitle";
import styles from "./AboutComponent.module.scss";
import img from "../../assets/magda.png";

import Image from "next/image";
const AboutComponent = (props: any) => {
  const [title, setTitle] = useState(props.title);
  const [about, setAbout] = useState(props.about[0]);
  console.log("ABOUT TITLE");
  console.log(title);
  console.log(about)
  return (
    <section className={styles.about}>
      <SectionTitle name={title}></SectionTitle>
      <div className={styles.about__container}>
        <div className={styles.about__item}>
          <p>{about.about1}</p>
          <p>{about.about2}</p>
        </div>
        <div className={styles.about__item}>
          {" "}
          <Image alt="o mnie" src={img} />
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
