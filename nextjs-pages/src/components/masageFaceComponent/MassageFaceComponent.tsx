import styles from './MassageFaceComponent.module.scss'

interface test {
    label: string,
    name: string
}

const MassageFaceComponent = (props: any) => {
    return (
        <div className={styles.massage}>
            <h2>{props.title} <span>{props.label}</span></h2>
            <p>Zabieg zaczyna się kilkuetapową pielęgnacją twarzy
                w g. standardów azjatyckich , kosmetykami gabinetowym i wysokiej jakości .
                W trakcie wykonywany jest cudowny masaż głowy .</p>
            <h3>ETAP GŁOWNY</h3>
            <p>Rozluźnianie i naciąganie mięśni , drenaż limfatyczny ,
                LIFTING , energetyzowanie .</p>
            <h3>EFEKTY</h3>
            <p>Redukcja obrzęków , przywrócenie naturalnego owalu twarzy , spłycenie zmarszczek ,
                ujędrnienie rozjaśnienie skóry , rozluźnienie mięśni twarzy , szyi oraz karku , leczenie
                bruksismu , głęboki relaks , ogólne przywrócenie dobrostanu organizmu.</p>
            <p>120 MINUT <span>250zł</span></p>
        </div>
    )
}

export default MassageFaceComponent;