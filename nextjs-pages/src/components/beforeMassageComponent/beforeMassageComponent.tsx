import { useState } from "react";
import styles from './BeforeMassageComponent.module.scss'

const BeforeMassageComponent = (props: any) => {
  const [state, getState] = useState(props.beforeMassage[0]);
  console.log("State before");
  console.log(state);
  return (
    <div className ={styles.before_massage }>
      <p>{state.title}</p>
      <p>{state.afterMassage}</p>
      <h3>{state.contraindications}</h3>
      <p>{state.description}</p>
      <p>{state.info}</p>
    </div>
  );
};
export default BeforeMassageComponent;
