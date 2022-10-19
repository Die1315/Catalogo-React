import Post from "./Post";
import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../service/data-service";

const initialState = [];

function PostList({ value }) {
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    getPost().then((posts) => {
      setPosts(posts);
    });

    return () => {};
  }, []);

  const postsComponents = posts
    .filter((e) => e.text.includes(value))
    .map((post, i) => (
      <Post
        Key={i}
        autor={post.autor}
        image={post.image}
        createdAt={post.createdAt}
        text={post.text}
        comments={post.comments}
      />
    ));
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-wrap justify-content-around">
        {posts === initialState ? "loading...." : postsComponents}
      </div>
    </div>
  );
}

export default PostList;
