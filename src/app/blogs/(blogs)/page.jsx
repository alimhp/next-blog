import PostLists from "../_components/PostLists";
import { getPosts } from "../../../services/postServices";
import setCookieOnReq from "../../../utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

export const metadata = {
  title: "بلاگ ها",
};
async function BlogPage({ searchParams }) {
  const stringified = queryString.stringify(searchParams);
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const posts = await getPosts(stringified, options);
  const { search } = searchParams;
  return (
    <>
      {search ? (
        <p className="!mb-4 text-gray-600">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد "
            : `نتیجه برای ${posts.length} نشان دادن`}
        </p>
      ) : null}
      <PostLists posts={posts} />
    </>
  );
}

export default BlogPage;
