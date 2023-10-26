import React, { useState } from "react";
import styles from "./ContactComponent.module.scss";

import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import AboutComponent from "../aboutComponent/AboutComponent";

const ContactComponent = (props: any) => {
  const [state, setState] = useState(props.contact[0]);
  const [title,setStateTitle] = useState(props.title)
  console.log("KONTAKT DANE");
  console.log(state);
  console.log('Title')
  console.log(title)
  return (
    <div className={styles.contact}>
      <p className={styles.contact__phone}>
        <FiPhone fontSize={36} className="icon_pink" />{" "}
        <span className="phone">{state.phone}</span>
      </p>
      <div className={styles.contact__adress}>
        <div className="adress__pin">
          <FiMapPin fontSize={36} className="icon_pink" />{" "}
        </div>
        <div className={styles.contact__adress__name}>
          <p> {state.city} </p>
          <p> {state.street}</p>
          <p> {state.street2}</p>
        </div>
      </div>

      <p className={styles.contact__phone}>
        <MdAlternateEmail fontSize={36} className="icon_pink" />{" "}
        <span>{state.email}</span>
      </p>
      <AboutComponent title={title}/>
    </div>
  );
};

export default ContactComponent;
