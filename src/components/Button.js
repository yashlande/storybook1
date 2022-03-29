import PropTypes from 'prop-types'

function Button({ label="Press Me", backgroundColor = "red", size = "md", onClick, onMouseEnter }) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }

    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} style={style}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func
}

export default Button