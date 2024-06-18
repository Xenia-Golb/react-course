import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {
    return (<div>
        <h2 style={{ textAlign: 'center' }}>{title}</h2>
        {posts.map((post, index) =>
            <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
        )}

    </div>);
}

export default PostList;