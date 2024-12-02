import Card from "../card/Card";
import posts from "../../posts";

export default function Main() {
    const uniqueTags = []
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag)
            }
        })
    })

    return (
        <>

            <ul>
                {uniqueTags.map((uniqueTag) => (
                    <li key={uniqueTag}>{uniqueTag}</li>
                ))}
            </ul>

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