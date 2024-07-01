import Link from "next/link";
import styles from "../styles/tour.module.css";
import Image from "next/image";
import {motion} from "framer-motion"

export default function Singletour({ resultado }) {
  const navLink = [
    {
      name: "Machu Picchu",
      link: "/machu-picchu",
      tag: "18",
    },
    {
      name: "Inca Trail",
      link: "/inca-trail",
      tag: "17",
    },
    {
      name: "Choquequirao Trek",
      link: "/choquequirao-trek",
      tag: "16",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto w-full mb-32">
      <section className={` `}>
        <div className={`rounded-t-primary  bg-white`}>
          <div
            className={`container mx-auto px-4 sm:px-4 md:px-4 lg:px-0 bg-white py-5 flex gap-3`}
          >
            <Link href="/" className="text-primary hover:text-blue-700">
              Home
            </Link>
            /<span>{resultado[0].title.rendered}</span>
          </div>
        </div>
      </section>
      <section className={`container mx-auto px-4 sm:px-4 md:px-4 lg:px-0`}>
        <main>
          <section className="flex flex-col md:flex-row gap-5">
            <div className="w-full sm:w-full md:w-1/2">
              <motion.img
                priority={true}
                src={
                  resultado[0]._embedded["wp:featuredmedia"][0].media_details
                    .sizes.full.source_url
                }
                width={
                  resultado[0]._embedded["wp:featuredmedia"][0].media_details
                    .sizes.full.width
                }
                height={
                  resultado[0]._embedded["wp:featuredmedia"][0].media_details
                    .sizes.full.height
                }
                className="rounded-xl"
                alt={resultado[0]._embedded["wp:featuredmedia"][0].alt_text}
                layoutId={resultado[0]._embedded["wp:featuredmedia"][0].media_details
                .sizes.full.source_url}
              />
            </div>
            <div className="w-full sm:w-full md:w-1/2">
              <h1 className="font-bold text-4xl mb-5 text-secondary">
                {resultado[0].title.rendered}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: resultado[0].excerpt.rendered,
                }} className="text-lg"
              ></div>
              <div className=" mt-5 flex gap-2">
               
                {resultado[0]._embedded["wp:term"][1].map((tag) => (
                    <li className={`bg-primary/5 px-3 py-1 rounded-full inline text-sm font-normal text-secondary border border-transparent hover:border-primary transition-all duration-300`} key={tag.name}>
                      {tag.name}
                    </li>
                  ))}
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
