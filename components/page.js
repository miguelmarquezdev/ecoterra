import Image from "next/image";
import Link from "next/link";

export default function pages({ page }) {
  return (
    <article className={`transition-all overflow-hidden`}>
      <Link href={`/tour/${page.slug}`}>
        <figure className="rounded-xl overflow-hidden h-56">
        <Image
              src={
                page._embedded["wp:featuredmedia"][0].media_details.sizes
                  .medium.source_url
              }
              width={
                page._embedded["wp:featuredmedia"][0].media_details.sizes
                  .medium.width
              }
              height={
                page._embedded["wp:featuredmedia"][0].media_details.sizes
                  .medium.height
              }
              media="(min-width: 800px)"
              alt={page._embedded["wp:featuredmedia"][0].alt_text}
              className="object-cover h-full aspect-square"
            />
        </figure>
      </Link>
      <div className={`py-4`}>
        <h3
          className={`font-bold capitalize text-black text-xl sm:text-xl md:text-2xl mb-2`}
        >
          {page.title.rendered}
        </h3>
      </div>
    </article>
  );
}
