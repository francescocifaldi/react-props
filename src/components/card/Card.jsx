import style from './Card.module.css'
import Button from "../button/Button"

export default function Card({ post }) {

    const {
        id,
        title,
        content,
        tags
    } = post

    return (

        <div className={style.card}>
            <div className="image">
                IMG
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{id}</p>
                <p>{tags}</p>
                <Button />
            </div>
        </div>
    )
}