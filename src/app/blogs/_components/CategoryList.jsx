import Link from "next/link";

async function CategoryList() {
  try {
    const res = await fetch("http://localhost:5000/api/category/list");
    const {
      data: { categories },
    } = await res.json();
    console.log(categories);
    return (
      <ul className="space-y-4">
        <Link href="/blogs">همه بلاگ ها</Link>
        {categories.map((category) => {
          return (
            <li>
              <Link href={`/blogs/category/${category.slug}`}>
                {" "}
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } catch (error) {
    console.error("خطا در دریافت داده:", error);
    return <div> errore while fetching data </div>;
  }
}

export default CategoryList;
