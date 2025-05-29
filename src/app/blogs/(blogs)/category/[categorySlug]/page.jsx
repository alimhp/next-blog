const { default: PostLists } = require("../../../_components/PostLists");

async function Category({ params }) {
  const { categorySlug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();
  const { posts } = data || {};
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
