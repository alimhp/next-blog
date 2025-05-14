async function PostLists() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);

  return posts.map((post) => <div>{post.title}</div>);
}

export default PostLists;
