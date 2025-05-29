import http from "./httpServices";

export async function getpostbySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list`,
    options
  );
  const {
    data: { posts },
  } = await res.json();
  return posts;
}

export async function LikePostApi(postId) {
  return http
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/post/like/${postId}`)
    .then(({ data }) => data.data);
}

export async function BookmarkPostApi(postId) {
  return http
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/post/bookmark/${postId}`)
    .then(({ data }) => data.data);
}
