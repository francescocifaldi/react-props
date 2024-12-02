import style from './Card.module.css'
import Button from "../button/Button"

export default function Card() {
    return (
        <div className={style.card}>
            <div className="image">
                IMG
            </div>
            <div className="description">
                <h2>Titolo del post</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt atque incidunt ut aliquid id quis quisquam commodi animi quasi accusantium facilis est, mollitia cum, autem soluta sit sapiente sed qui.</p>
                <Button />
            </div>
        </div>
    )
}