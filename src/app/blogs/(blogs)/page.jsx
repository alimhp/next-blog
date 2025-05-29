import PostLists from "../_components/PostLists";
import { getPosts } from "../../../services/postServices";
import setCookieOnReq from "../../../utils/setCookieOnReq";
import { cookies } from "next/headers";

export const metadata = {
  title: "بلاگ ها",
};
async function BlogPage() {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const posts = await getPosts(options);
  return (
    <div>
      <PostLists posts={posts} />
    </div>
  );
}

export default BlogPage;
