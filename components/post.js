import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helper";
import styles from "../styles/blog.module.css";

export default function Post({ post }) {
  return (
    // <article
    //   className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 ${styles.post} items-center mb-16`}
    // >
    //   <div className={`${styles.contExcerpt} col-span-5 z-10`}>
    //     <h3 className="font-bold text-xl w-3/5 capitalize">
    //       {post.title.rendered}
    //     </h3>
    //     <span className="block my-3 text-sm">{formatearFecha(post.date)}</span>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: post.excerpt.rendered,
    //       }}
    //       className="text-black bg-white shadow-lg shadow-black-100 p-5 rounded-lg border border-t border-slate-100 first-line:uppercase first-line:tracking-widest
    //     first-letter:text-7xl first-letter:font-bold first-letter:text-black
    //     first-letter:mr-3 first-letter:float-left"
    //     ></div>

    //     <Link
    //       href={`/blog/${post.slug}`}
    //       className="text-white bg-primary hover:bg-blue-700 transition-all py-2 px-4 mt-5 inline-block rounded-md text-md"
    //     >
    //       Continue Reading...
    //     </Link>
    //   </div>
    //   <div className={`${styles.bgImg} overflow-hidden rounded-lg`}>
    //     <Link href={`/blog/${post.slug} `}>
    //       <Image
    //         className=" relative"
    //         src={
    //           post._embedded["wp:featuredmedia"][0].media_details.sizes
    //             .medium_large.source_url
    //         }
    //         width={
    //           post._embedded["wp:featuredmedia"][0].media_details.sizes
    //             .medium_large.width
    //         }
    //         height={
    //           post._embedded["wp:featuredmedia"][0].media_details.sizes
    //             .medium_large.height
    //         }
    //         alt={post.title.rendered}
    //       />
    //     </Link>
    //   </div>
    // </article>

    <div>
      post
    </div>
  );
}
