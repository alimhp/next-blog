import { Suspense } from "react";
import PostLists from "./_components/PostLists";
import Spinner from "../../ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
};
async function BlogPage() {
  return (
    <div>
      <h1>post list :</h1>
      <Suspense fallback={<Spinner />}>
        <PostLists />
      </Suspense>
    </div>
  );
}

export default BlogPage;
