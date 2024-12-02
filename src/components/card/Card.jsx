import style from './Card.module.css'
import Button from "../button/Button"

export default function Card({ title, content, id }) {
    return (

        <div className={style.card}>
            <div className="image">
                IMG
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{id}</p>
                <Button />
            </div>
        </div>
    )
}