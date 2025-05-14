import Link from "next/link";
import Button from "../ui/Button";

export const metadata = {
  title: "خانه | بلاگ اپ",
};

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl my-20">
        اپلییکشن مدیریت بلاگ
      </h1>
      <div>
        <p className="text-center text-black text-lg loading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل را مدیریت کنی
          <br />
          بتونی بلاگ بسازی - کامنت بزاری و در پنلت همه اتفاقات رو رصد کنی!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button classname="not-only-of-type:bg-sky-250 border border-gray-200 !px-4 !py-2 !mt-4 text-gray-600 border-b-blue-50 rounded hover:bg-sky-600 hover:text-amber-50">
            <Link href="/blogs"> مطالعه بلاگ ها</Link>
          </Button>
          <Button classname="bg-blue-600 !px-4 !py-2 !mt-4 text-amber-50 border-b-blue-50 rounded hover:bg-blue-900 ">
            <Link href="/blogs"> مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
