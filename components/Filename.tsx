import styles from 'styles/FileName.module.css'

type propTypes = {
    children?: React.ReactNode
}

const FileName = (props: propTypes) => {
    return (
        <span className={styles.filename}>
            {props.children}
        </span>
    )
}

export default FileName