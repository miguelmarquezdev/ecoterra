import Layout from "../components/layout";
import Header from "../components/header";
import Link from "next/link";
import styles from "../styles/grid.module.css";
import { GoArrowDownRight } from "react-icons/go";
import {motion} from "framer-motion"

export default function Home({ resultado, trabajos, blogs }) {
  console.log(resultado);
  return (
    <Layout
      title={"M.IA. Digital Solutions - Agencia Seo en Cuzco"}
      description={"Machu Picchu Tours From Cusco"}
    >
      <Header bgslate="bg-transparent absolute w-full z-10" />
      <main>
        <section className="bg-black h-screen w-full">

        </section>
      </main>



      <div
        className={` w-full h-screen relative bg-no-repeat bg-cover bg-center overflow-x-hidden`}
      >
        <div
          className={`absolute top-0 w-full flex items-center h-screen  justify-center`}
        >
          <div className="w-5/12 hidden lg:block bg-secondary h-full relative overflow-hidden burbujas">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="w-full sm:w-full lg:w-7/12   bg-cosmo h-full bg-cover bg-center before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-secondary/95 before:to-secondary/50 relative"></div>
        </div>
        <div className="flex  items-center relative h-full w-full mx-auto max-w-screen-xl sm:px-4 px-4 lg:px-4 xl:px-0">
          <h1 className="text-white md:text-7xl font-bold max-w-screen-xl w-4/5 text-4xl leading-normal md:leading-none">
            Experto en el desarrollo de soluciones digitales.
          </h1>
        </div>
      </div>
      <main>
        <section className="py-32 w-full max-w-screen-xl mx-auto">
          <span className="uppercase text-primary flex items-center gap-2 mb-10 sm:px-4 px-4 lg:px-4 xl:px-0">
            <GoArrowDownRight className="text-xl" />
            Nuestro pan de cada día
          </span>
          <div className="flex flex-col sm:flex-row lg:flex-row xl-flex-row xl:gap-32 lg:gap-32 gap-7 sm:px-4 sm:gap-5 m:px-4 px-4 lg:px-4 xl:px-0">
            <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 ">
              <p className="text-3xl leading-10 font-medium">
                Somos un equipo de desarrolladores web altamente creativos con
                una visión clara para la creación y desarrollo de productos
                digitales innovadores.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
              <p className="text-lg left-8">
                <span className="italic font-medium">
                  M.IA. Digital Solutions
                </span>{" "}
                no es la típica agencia de marketing. Somos un socio en el
                desarrollo. Un socio que le ayuda de verdad. Que pregunta mejor,
                hace mejor y a veces incluso sabe mejor. Desde 2020, ayudamos a
                nuestros clientes a digitalizar con éxito sus procesos
                empresariales. Y también inventamos y lanzamos nuestras propias
                soluciones en nuestro entorno creativo.
              </p>
            </div>
          </div>
        </section>
        <section>
          <hr />
          <div className="w-full max-w-screen-xl mx-auto -mt-6">
            <div className="uppercase  inline-block bg-white px-5 py-3">
              <span className="flex items-center gap-2 font-medium ">
                <GoArrowDownRight className="text-xl" />
                Nuestro Trabajo
              </span>
            </div>
          </div>
        </section>
        <section className="py-32 w-full max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 sm:grid-cols-3 gap-10 sm:px-4 px-4 lg:px-4 xl:px-0">
            {trabajos.map((post) => (
              <Link href={`/proyecto/${post.slug}`} key={post.slug}>
                <div className="w-full overflow-hidden rounded-2xl  hover:scale-105 transition-all duration-300 ease-out">
                  <motion.img
                    src={
                      post.yoast_head_json.og_image[0].url
                        ? post.yoast_head_json.og_image[0].url
                        : ""
                    }
                    alt={post.yoast_head_json.og_image[0].url}
                    layoutId={post.yoast_head_json.og_image[0].url}
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
          <div className="flex justify-center">
            <Link
              href={`/proyectos`}
              className={`a-btn text-black border py-5 px-10 inline-block rounded-full mt-16 ${styles.abtn} relative overflow-hidden group border-neutral-300 hover:border-primary transition-all duration-300 ease-in-out delay-100`}
            >
              <span className="text-white z-50 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out ">
                Ver Mas Proyectos
              </span>{" "}
              Ver Mas Proyectos
            </Link>
          </div>
        </section>
        <section>
          <div
            className={` w-full h-screen relative bg-no-repeat bg-cover bg-center overflow-x-hidden`}
          >
            <div
              className={` top-0 w-full flex items-center h-screen  justify-center`}
            >
              <div className="w-5/12 h-full  bg-cover bg-center overflow-hidden bg-celar sm:bg-celar md:bg-bannertwo  relative hidden lg:block"></div>
              <div className="lg:w-7/12 sm:w-full w-full  h-full  bg-secondary flex flex-col justify-center lg:p-40 xl:p-40 p-4 gap-10">
                <h2 className="text-white lg:text-7xl xl:text-7xl text-5xl font-bold max-w-screen-xl z-50 w-4/5">
                  Una fabrica de ideas.
                </h2>
                <p className="text-lg left-8 text-white ">
                  Creemos que todo puede ser mejor y más inteligente. Por eso
                  cada día vemos oportunidades de utilizar nuestros
                  conocimientos técnicos y nuestra perspicacia empresarial para
                  hacer la vida de los demás un poco más fácil. ¿Quiere saber
                  qué nos mantiene ocupados?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-neutral-100">
          <div className="w-full max-w-screen-xl mx-auto py-32 ">
            <span className=" uppercase text-secondary flex items-center gap-2 mb-10 sm:px-4 px-4 lg:px-4 xl:px-0">
              <GoArrowDownRight className="text-xl" />
              LEA TAMBIÉN
            </span>
            <div className={`grid grid-cols-1`}>
              {blogs.map((blog) => (
                <article className="flex flex-col gap-2 border-t border-neutral-300 py-10 px-10 hover:bg-neutral-300/20" key={blog.id}>
                  <Link href={`/blog/${blog.slug}`} >
                    <ul className="flex gap-3 flex-wrap">
                      {blog._embedded["wp:term"][1].map((tag) => (
                        <li className={`text-primary text-lg capitalize`} key={tag.name}>
                          {tag.name}
                        </li>
                      ))}
                    </ul>
                    <h1 className="font-bold text-3xl text-secondary">
                      {blog.title.rendered}
                    </h1>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    `https://app.enjoyperu.org/wp-json/wp/v2/posts?_embed=true`
  );
  const resultado = await res.json();
  let trabajos = resultado.filter((trabajo) => trabajo.categories[1] == "3");
  let blogs = resultado.filter((blog) => blog.categories[0] == "9");
  console.log(resultado);

  return {
    props: {
      resultado,
      trabajos,
      blogs,
    },
  };
}
