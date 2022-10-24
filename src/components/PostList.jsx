import Post from "./Post";
import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../service/data-service";

const initialState = [];

function PostList({ search }) {
  const [posts, setPosts] = useState(initialState);
  console.log(posts)
 
  useEffect(() => {
    getPost().then((posts) => {
      setPosts(posts);
      
    });

    return () => {};
  }, []);

  const postsComponents = posts
    .filter((e) => e.text.includes(search))
    .map((post, i) => (
      <Post
        Key={i}
        autor={post.author.username}
        image={post.image}
        createdAt={post.createdAt}
        text={post.text}
        likes={post.likes}
        comments={post.comments.length}
         
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
