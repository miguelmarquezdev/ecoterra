import Image from "next/image";
import Link from "next/link";
export default function Tour({ post }) {
  return (
    // <article
    //   className={`transition-all overflow-hidden`}
    // >
    //   <Link href={`/trabajo/${post.slug}`} >
    //     <Image
    //       src={
    //         post._embedded["wp:featuredmedia"][0].media_details.sizes
    //           .medium_large.source_url
    //       }
    //       width={
    //         post._embedded["wp:featuredmedia"][0].media_details.sizes
    //           .medium_large.width
    //       }
    //       height={
    //         post._embedded["wp:featuredmedia"][0].media_details.sizes
    //           .medium_large.height
    //       }
    //       alt={post._embedded["wp:featuredmedia"][0].alt_text
    //       }
    //       className="rounded-xl overflow-hidden"
    //     />
    //   </Link>
    //   <div className={`px-3 py-4`}>
    //     <h3 className={`font-bold capitalize text-black text-xl mb-2`}>{post.title.rendered}</h3>
    //     <ul className={` text-black text-md capitalize`}>
    //       <li>Duration: {post.acf.duracion}</li>
    //       <li>Location: {post.acf.locacion}</li>
    //       <li>Type Trip: {post.acf.type_trip}</li>
    //     </ul>
    //     <div className={`flex justify-between items-center mt-3 `}>
    //       <div className={`text-md text-black`}>From: <b className={`text-grande`}>${post.acf.precio}</b></div>
    //       <Link
    //         href={`/tour/${post.slug}`}
    //         className={`bg-primary text-white  py-2 px-4 rounded-md 
    //         inline-block shadow-md shadow-slate-400 hover:shadow-none transition duration-300 ease-out text-md text-md font-primary-family`}
    //       >
    //         View Tour
    //       </Link>
    //     </div>
    //   </div>
    // </article>
    
    <div>tour</div>
  );
}
