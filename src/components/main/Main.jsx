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
        <main>
            <div className="container">
                <ul className="row">
                    {uniqueTags.map((uniqueTag) => (
                        <li key={uniqueTag}>{uniqueTag}</li>
                    ))}
                </ul>
            </div>
            < div className="container" >
                <div className="row">
                    {
                        posts.map((post) => (

                            <div key={post.id} className="col-4">
                                {post.published &&
                                    < Card post={post} />
                                }
                            </div>

                        ))
                    }
                </div>
            </div >
        </main>
    )
}