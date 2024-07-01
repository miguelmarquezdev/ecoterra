import Image from "next/image";
import Layout from "../components/layout";
import HeaderDos from "../components/header-dos";
import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";
import { LiaUsersSolid } from "react-icons/lia";
import { TbWorldWww } from "react-icons/tb";
import { GiSouthAmerica } from "react-icons/gi";
import Link from "next/link";


export default function Proyectos({trabajos}) {
    console.log(trabajos)
  return (
    <main>
      <Layout
        title={"Publicidad - SEM"}
        description={"Sobre Nosotros, guitarLA Tienda de Música"}
      >
        <HeaderDos bgslate="bg-secondary" />
        <section className="bg-secondary w-full xl:h-96 lg:h-96 sm:h-96 h-64 bg-cover flex justify-center items-center">
          <h1 className="text-white font-black uppercase xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
            Proyectos
          </h1>
        </section>
        <section className="py-32 w-full max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 sm:grid-cols-3 gap-10 sm:px-4 px-4 lg:px-4 xl:px-0">
            {trabajos.map((post) => (
              <Link href={`/proyecto/${post.slug}`} key={post.slug}>
                <div className="w-full overflow-hidden rounded-2xl  hover:scale-105 transition-all duration-300 ease-out">
                  <img
                    src={
                      post.yoast_head_json.og_image[0].url
                        ? post.yoast_head_json.og_image[0].url
                        : ""
                    }
                    alt={post.yoast_head_json.og_image[0].url}
                  />
                </div>
                <h1 className="font-semibold text-xl uppercase mt-5 mb-3 text-secondary">
                  {post.title.rendered}
                </h1>
                <ul className="flex gap-3 flex-wrap">
                  {post._embedded["wp:term"][1].map((tag) => (
                    <li className={`bg-primary/5 px-3 py-1 rounded-full inline text-sm font-normal text-secondary`} key={tag.name}>
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    </main>
  );
}

export async function getStaticProps() {
    const res = await fetch(
      `https://app.enjoyperu.org/wp-json/wp/v2/posts?_embed=true`
    );
    const resultado = await res.json();
    let trabajos = resultado.filter((trabajo) => trabajo.categories[0] == "12");
    console.log(trabajos);
  
    return {
      props: {
        trabajos,
      },
    };
  }
  