import styles from "styles/Centerer.module.css"

type PropTypes = {
    children?: React.ReactNode
}

const Centerer = (props: PropTypes) => {
    return (
        <div className={styles.center}>
            {props.children}

        </div>
    )

}

export default Centerer