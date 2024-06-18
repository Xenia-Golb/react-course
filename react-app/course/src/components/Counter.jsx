import { useState } from "react";

function Counter() {
    const [likes, setLikes] = useState(0);
    function increment() {
        setLikes(likes + 1);
    }
    function decrement() {
        setLikes(likes - 1);
    }
    return (<>
        <h2>{likes}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>);
}

export default Counter;