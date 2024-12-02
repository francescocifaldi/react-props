import Card from "../card/Card";
import posts from "../../posts";

export default function Main() {
    return (
        <>
            {
                posts.map((post) => (
                    < div key={post.id} className="container" >
                        {post.published &&
                            < Card post={post} />
                        }
                    </div >
                ))
            }
        </>
    )
}