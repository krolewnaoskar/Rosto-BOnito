import React, { useState } from "react";
import styles from "./ContactComponent.module.scss";

import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

const ContactComponent = (props: any) => {
  const [state, setState] = useState(props.contact[0]);
  console.log("KONTAKT DANE");
  console.log(state);
  return (
    <div className={styles.contact}>
      <p>
        <FiPhone fontSize={36} className="icon_pink" />{" "}
        <span className="phone">{state.phone}</span>
      </p>
      <FiMapPin fontSize={36} className="icon_pink" />{" "}
      <span>
        {state.city} {state.street}
      </span>
      <p>
        <MdAlternateEmail fontSize={36} className="icon_pink" />
      </p>
    </div>
  );
};

export default ContactComponent;
