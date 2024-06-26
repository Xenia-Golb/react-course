import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {
    const [post, setPost] = useState(
        {
            title: "",
            body: ""
        }
    );
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({
            title: "",
            body: ""
        })
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Title" />
            <MyInput
                type="text"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                placeholder="Content" />
            <MyButton onClick={addNewPost}>Add Post</MyButton>
        </form>
    );
}

export default PostForm;