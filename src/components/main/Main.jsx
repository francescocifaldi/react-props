import Card from "../card/Card";
import posts from "../../posts";

export default function Main() {
    posts.forEach((post) => (console.log(post)))
    return (
        <>
            {
                posts.map((post) => (
                    < div key={post.id} className="container" >
                        < Card />
                    </div >
                ))
            }
        </>
    )
}