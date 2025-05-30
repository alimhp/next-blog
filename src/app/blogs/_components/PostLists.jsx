import Image from "next/image";
import CoverImage from "../../../components/CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Avatar from "../../../ui/Avatar";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "../../../utils/numberFormatter";
import { getPosts } from "../../../services/postServices";
import setCookieOnReq from "../../../utils/setCookieOnReq";
import { cookies } from "next/headers";

async function PostLists() {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const posts = await getPosts(options);
  return (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 !p-2 rounded-lg">
          <CoverImage {...post} />
          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="!mb-4 font-bold text-gray-700 ">{post.title}</h2>
            </Link>
            {/* post author - reading time */}
            <div className="flex items-center justify-between !mb-3">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-gray-500">
                <ClockIcon className="w-4 h-4 stroke-gray-500 !ml-1" />
                <span className="!ml-1">خواندن :</span>
                <span className="!ml-1 leading-3">
                  {" "}
                  {toPersianDigits(post.readingTime)}
                </span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostLists;
