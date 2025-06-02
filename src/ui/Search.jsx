"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const formSubmit = (e) => {
    e.preventDefault();
    // const searchValue = e.target.search.value;
    const search = e.target.search;
    const searchValue = search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };
  return (
    <form className="relative !w-full !max-w-md !mb-3" onSubmit={formSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="textField__input !p-3 text-xs bg-secondary-0 w-full 
                   shadow-md hover:shadow-lg focus:shadow-lg transition-shadow 
                   rounded-lg border border-gray-200 focus:border-primary-500"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 !ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
