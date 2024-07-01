import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../utils/helper";

export default function Singleblog({ resultado }) {
  console.log(resultado);
  return (
    <main>
      <section>
        <div>
          <div
            className={`w-full max-w-screen-xl px-4 sm:px-4 md:px-4 lg:px-4 mx-auto  py-5 flex gap-3`}
          >
            <Link href="/" className="text-primary hover:text-blue-700">
              Home
            </Link>
            /
            <Link href="/blog" className="text-primary hover:text-blue-700">
              Blog
            </Link>
            /<span>{resultado[0].title.rendered}</span>
          </div>
        </div>
      </section>
      <section
        className={`w-full max-w-screen-xl px-4 sm:px-4 md:px-4 lg:px-4 mx-auto`}
      >
        <div className="">
          <div className="flex flex-col sm:flex-col md:flex-row justify-between mb-10 items-start sm:items-start md:items-center">
            <h1 className="font-black text-secondary text-5xl">
              {resultado[0].title.rendered}
            </h1>
          </div>
          <div className="flex justify-between pb-10">
            <span className="capitalize flex gap-2">
              <img
                src={resultado[0]._embedded.author[0].avatar_urls[24]}
                className="rounded-full"
              ></img>{" "}
              {resultado[0]._embedded.author[0].name}
            </span>
            <span className="block text-md ">
              <strong className="text-secondary">Publicado: </strong> {formatearFecha(resultado[0].date)}
            </span>
          </div>
          <Image
            priority={true}
            src={
              resultado[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.source_url
            }
            width={
              resultado[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.width
            }
            height={
              resultado[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.height
            }
            className="rounded-lg mb-5"
            alt={resultado[0].title.rendered}
          />
          <div
            className="wp-content mb-40 first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left max-w-screen-lg mx-auto pt-10"
            dangerouslySetInnerHTML={{ __html: resultado[0].content.rendered }}
          ></div>
        </div>
      </section>
    </main>
  );
}
