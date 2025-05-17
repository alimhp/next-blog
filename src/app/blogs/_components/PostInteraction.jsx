import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import ButtonIcon from "../../../ui/ButtonIcon";
import { toPersianDigits } from "../../../utils/numberFormatter";

function PostInteraction({ post }) {
  return (
    <div className="flex items-center gap-x-2">
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
      <ButtonIcon variant="red">
        <HeartIcon />
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
