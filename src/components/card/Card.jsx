import style from './Card.module.css'
import Button from "../button/Button"
import placeholder from "../../assets/31343C.svg"

export default function Card({ post }) {

    const {
        id,
        title,
        content,
        tags,
        image
    } = post

    return (

        <div className={style.card}>
            <div className="image">
                <img src={image || placeholder} />
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{id}</p>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}

                </ul>
                <Button />
            </div>
        </div>
    )
}