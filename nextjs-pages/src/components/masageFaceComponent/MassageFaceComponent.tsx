import { useState } from 'react';
import styles from './MassageFaceComponent.module.scss';
import { BiTimeFive } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa"

interface test {
    label: string,
    name: string
}

const MassageFaceComponent = (props: any) => {
    const [data, setData] = useState(props.messageData)

    console.log("Facemassage")
    console.log(data)
    return (
        <> {data && data.map((item: any, index: any) => {
            return (<div className={styles.massage} key={index} >
                <h2>{item.title} <span>{item.titleColor}</span></h2>
                <p>{item.description}</p>
                <h3>{item.etap}</h3>
                <p>{item.etapDescription}</p>
                <h3>{item.effects}</h3>
                <p>{item.effectsDescription}</p>
                <p><BiTimeFive fontSize={40} className="icon_time" /> {item.time} <FaMoneyBillWave fontSize={40} className="icon_money" /> <span>{item.price}</span></p>
            </div>)
        })}
        </>
    );
}

export default MassageFaceComponent;