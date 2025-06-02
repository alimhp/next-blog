import { cookies } from "next/headers";
import queryString from "query-string";
import setCookieOnReq from "../../../../../utils/setCookieOnReq";
import { getPosts } from "../../../../../services/postServices";

const { default: PostLists } = require("../../../_components/PostLists");

async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}&${stringified}`
  // );
  // const { data } = await res.json();
  // const { posts } = data || {};
  const stringified =
    queryString.stringify(searchParams) + "&" + `categorySlug=${categorySlug}`;
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const posts = await getPosts(stringified, options);
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-gray-500">
          .پستی در این دسته بندی وجود ندارد
        </p>
      ) : (
        <PostLists posts={posts} />
      )}
    </div>
  );
}
export default Category;
