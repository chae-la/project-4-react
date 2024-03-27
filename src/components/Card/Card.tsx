import "./card.scss"
import Counter from "../Counter/Counter.tsx";

type CardProps = {
    name: string;
    id: number;
    role: string;
}

const Card = ({name, role} : CardProps) => {


    return (
        <div className="card">
            <h4 className="card__info">Name: {name}</h4>
            <h4 className="card__info">Role: {role}</h4>
            <Counter />
        </div>

    )
}

export default Card;