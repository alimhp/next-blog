import Image from "next/image";
import { notFound } from "next/navigation";
import { getpostbySlug, getPosts } from "../../../services/postServices";

export async function generateMetadata({ params }) {
  const post = await getpostbySlug(params.postSlug);
  return {
    title: `پست ${post.title}`,
  };
}
export async function generateStaticParams() {
  const posts = await getPosts();
  if (!posts || !Array.isArray(posts)) return [];
  const postSlugs = posts.map((post) => ({
    postSlug: post.slug,
  }));
  return postSlugs;
}
async function SinglePost({ params }) {
  const post = await getpostbySlug(params.postSlug);

  if (!post) notFound();
  return (
    <div className="!m-16 text-gray-600 !max-w-screen-md !mx-auto s:!m-20">
      <h1 className="text-gray-700 text-2xl font-bold !mb-8">{post.title}</h1>
      <p className="!mb-4">{post.briefText}</p>
      <p className="!mb-8">{post.text}</p>
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg !mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          width={800}
          height={450}
          src={post.coverImageUrl}
        />
      </div>
      {/* {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null} */}
      {/* <BlogComments post={post} /> */}
    </div>
  );
}

export default SinglePost;
