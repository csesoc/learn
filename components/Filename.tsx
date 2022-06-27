type propTypes = {
    children?: React.ReactNode
}

const FileName = (props: propTypes) => {
    return (
        <span className="filename">
            {props.children}
        </span>
    )
}

export default FileName