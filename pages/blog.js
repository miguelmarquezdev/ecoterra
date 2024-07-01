import Post from "../components/post";
import Layout from "../components/layout";
import Header from "../components/header";
import { GoArrowDownRight } from "react-icons/go";
import Link from "next/link";
import { formatearFecha } from "../utils/helper";

export default function Blog({ blogs }) {
  console.log(blogs);
  return (
    <Layout title={"Blog - Enjoy Peru"} description={"Our Blog"}>
      <Header bgslate="bg-primary" />
      <section className="bg-secondary w-full xl:h-96 lg:h-96 sm:h-96 h-64 bg-cover flex justify-center items-center">
          <h1 className="text-white font-black uppercase xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
            Blog
          </h1>
        </section>
      <section className="bg-neutral-100">
        <div className="w-full max-w-screen-xl mx-auto py-32 px-4 sm:px-4 lg:px-4 xl:px-0">
          <div className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-10`}>
            {blogs.map((blog) => (
              <article className="flex flex-col gap-2 hover:bg-neutral-300/20 rounded-lg overflow-hidden"  key={blog.id}>
                <Link
                  href={`/blog/${blog.slug}`}
                >
                <img
                  src={
                    blog.yoast_head_json.og_image[0].url
                      ? blog.yoast_head_json.og_image[0].url
                      : ""
                  }
                  alt={blog.yoast_head_json.og_image[0].url}
                />
                </Link>
                <div className="flex justify-between px-10 pt-5">
                 
                  <span className="block text-md ">
                    <strong className="text-secondary">Publicado: </strong>{" "}
                    {formatearFecha(blog.date)}
                  </span>
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="p-10 flex flex-col gap-3"
                >
                  <ul className="flex gap-3 flex-wrap">
                    {blog._embedded["wp:term"][1].map((tag) => (
                      <li className={`text-secondary text-sm capitalize bg-neutral-200 px-2 rounded-xl`} key={tag.name}>
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                  <h1 className="font-bold text-3xl text-secondary">
                    {blog.title.rendered}
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} className="line-clamp-4">
                    
                  </div>
                  <span className="capitalize flex gap-2 mt-5">
                    <img
                      src={blog._embedded.author[0].avatar_urls[24]}
                      className="rounded-full"
                    ></img>{" "}
                    {blog._embedded.author[0].name}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://app.enjoyperu.org/wp-json/wp/v2/posts?_embed=true`
  );
  const resultado = await res.json();
  let blogs = resultado.filter((blog) => blog.categories[0] == "9");
  console.log(resultado);

  return {
    props: {
      blogs,
    },
  };
}
