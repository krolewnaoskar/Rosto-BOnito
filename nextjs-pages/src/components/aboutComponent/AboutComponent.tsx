import { useState } from "react";
import SectionTitle from "../section_title/SectionTitle";

const AboutComponent = (props: any) => {
    const [title,setTitle] = useState(props.title)
  return (
    <section>
      <SectionTitle name={title}></SectionTitle>
    </section>
  );
};

export default AboutComponent;
