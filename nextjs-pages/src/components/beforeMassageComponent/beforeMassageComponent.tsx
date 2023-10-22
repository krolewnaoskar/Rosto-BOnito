import { useState } from "react";

const BeforeMassageComponent = (props: any) => {
  const [state, getState] = useState(props.beforeMassage[0]);
  console.log("State before");
  console.log(state);
  return (
    <>
      <p>{state.title}</p>
      <p>{state.afterMassage}</p>
      <h3>{state.contraindications}</h3>
      <p>{state.description}</p>
    </>
  );
};
export default BeforeMassageComponent;
