"use client";
import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";

import ButtonIcon from "../../../ui/ButtonIcon";
import { toPersianDigits } from "../../../utils/numberFormatter";
import { BookmarkPostApi, LikePostApi } from "../../../services/postServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function PostInteraction({ post }) {
  const router = useRouter();
  const likeHandler = async (postId) => {
    try {
      const { message } = await LikePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await BookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="secondary">
        <ChatBubbleBottomCenterIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
// toPersianDigits
