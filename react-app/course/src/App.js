// import Counter from "./components/Counter";
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", content: "Aontent 1" },
    { id: 2, title: "Fost 2", content: "Hontent 2" },
    { id: 3, title: "Aost 3", content: "Content 3" }
  ]);

  const [filter, setFilter] = useState(sort: '', query: '');



  const sortedPosts = getSortedPosts();

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts((prev) => prev.filter((p) => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts()
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title={'Посты'} />
        : <div>
          <h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
        </div>
      }

    </div>
  );
}

export default App;
