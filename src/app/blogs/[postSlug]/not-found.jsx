"use client";

import Link from "next/link";

// import useMoveBack from "@/hook/useMoveBack";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 !mb-8 ">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>

            <Link href="/blogs">برگشتن به صفحه بلاگ ها</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
