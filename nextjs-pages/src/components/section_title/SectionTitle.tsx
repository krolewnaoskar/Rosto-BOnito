import styles from './SectionTitle.module.scss';
const SectionTitle = (props: any) => {
    const { name, description } = props;

    return (
        <div className={styles.section_title}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
export default SectionTitle