import Image from "next/image";

function Avatar({ src, width = 24 }) {
  return (
    <div>
      <Image
        src={src || "/image/avatar.png"}
        width={width}
        height={width}
        className="rounded-full ring-1 ring-gray-400 ml-2"
        alt={src}
      />
    </div>
  );
}

export default Avatar;
