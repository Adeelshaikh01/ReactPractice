import './css/input.css'

function Input({ type, placeholder,onChange,value }) {
    return (
        <input className="formClass" value={value} onChange={onChange} type={type} placeholder={placeholder} />
    )
}

export default Input;