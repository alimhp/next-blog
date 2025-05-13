"use client";

import useMoveBack from "../hooks/UseMoveBack";

// import useMoveBack from "@/hook/useMoveBack";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";

function NotFound() {
  const moveback = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 !mb-8 ">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            <button
              onClick={moveback}
              className="flex items-center gap-x-2 text-secondary-500"
            >
              {/* <ArrowRightIcon className="w-6 h-6 text-primary-900" /> */}
              <span className="hover:text-blue-800"> برگشت </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
