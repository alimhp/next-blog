import { Suspense } from "react";
import PostLists from "../_components/PostLists";
import Spinner from "../../../ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
};
function BlogPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostLists />
      </Suspense>
    </div>
  );
}

export default BlogPage;
