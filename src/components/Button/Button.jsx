

function Button({ text, className, onclick }) {
    return (
        <button
            onClick={onclick}
            className={className}>{text}</button>
    )
}
export default Button