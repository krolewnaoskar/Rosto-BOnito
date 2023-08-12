
import { useState } from 'react';
import styles from './ClassicMassageComponent.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';

const ClassicMassageComponent = (props: any) => {
    const [data, setData] = useState(props.classicData)
    console.log('Clasic Data')
    console.log(data)
    return (
        <>
            {data && data.map((el: any, index: any) => {
                return (
                    <div key={index} className={styles.classic_massage}>
                        <div className={styles.classic_massage__title}>
                            <h3>{el.title} <span>{el.titleColor}</span></h3>
                            <p>{el.description}</p></div>
                        <div className={styles.price}>
                            <div>{el.time}</div>
                            <div>{el.price}</div>
                            <div>{el.time2}</div>
                            <div>{el.price2}</div>
                        </div>
                    </div>
                )
            })}
            <div className={styles.classic_info}>
                <p className={styles.classic_info__description}>JEŚLI NIE WIESZ JAKI MASAŻ JEST DLA CIEBIE - ZADZWOŃ ! </p>
                <div className={styles.classic_info__phone}><FaPhoneAlt fontSize={36} /> <a href="tel:+48530907750">530907750</a></div>
            </div>
        </>
    )
}
export default ClassicMassageComponent;