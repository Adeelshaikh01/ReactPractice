function Card({ name, email, phone }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h3>{phone}</h3>
        </div>
    )
}

export default Card;