import './css/button.css'

function Button(props) {
    let {onClick,children } = props;
    return (
        <button className="btn" onClick={onClick}>{children}</button>
        )
}

export default Button;