import { useContext } from 'react';
import { GlobalTheme } from '../../App';
import './css/button.css'

function Button(props) {
    const theme = useContext(GlobalTheme)
    
    let {onClick,children } = props;
    return (
        <button className={`btn ${theme ? "btnLight" : "btnDark"}`} onClick={onClick}>{children}</button>
        )
}

export default Button;