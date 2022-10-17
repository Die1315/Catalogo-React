import Post from "./Post";
const posts = [
  {
    img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",
    time: "3 sconds ago",
    user: "@user1",
    description: "pariatur velit ut incididunt sunt cillum id consequat aliquip mollit commodo officia Duis ea est commodo esse quis enim.",
    likes: 28,
    comments: 15,
  },
  {
    img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",
    time: "17 sconds ago",
    user: "@user2",
    description: "Some quick example to build on the card title and make up the bulk od the card's content",
    likes: 42,
    comments: 13,
  },
  {
    img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",
    time: "20 sconds ago",
    user: "@userN",
    description: "mollit id lorem aute esse enim mollit dolor culpa ad pariatur veniam laboris in velit eiusmod aute labore.",
    likes: 62,
    comments: 40,
  },
  {
    img: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",
    time: "30 sconds ago",
    user: "@user0120",
    description: "sed anim dolore ipsum pariatur et esse laborum ut irure tempor amet ipsum cupidatat Excepteur sint aliquip esse anim.",
    likes: 72,
    comments: 26,
  },
];

function PostList() {
  const postsComponents = posts.map((post, i) => (
    <Post
      Key={i}
      user={post.user}
      img={post.img}
      time={post.time}
      description={post.description}
      likes={post.likes}
      comments={post.comments}
    />
  ));
  return (
    <div className="container">
      <div className="row d-flex justify-content-around">{postsComponents}</div>
    </div>
  );
}

export default PostList;
