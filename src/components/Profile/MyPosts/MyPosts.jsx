import object from "./MyPosts.module.css"
import Post from "./Posts/Post"

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <Post message="Hey, how are your?" likesCount="34" />
                <Post message="It is my first posts" likesCount='56' />
                <Post countLike="15" />
            </div>
    )
}

export default MyPosts 