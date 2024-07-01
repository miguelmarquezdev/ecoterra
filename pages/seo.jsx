import Image from "next/image";
import Layout from "../components/layout";
import HeaderDos from "../components/header-dos";
import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";

export default function Seo() {
  return (
    <main>
      <Layout
        title={"SEO"}
        description={"Sobre Nosotros, guitarLA Tienda de Música"}
      >
        <HeaderDos bgslate="bg-secondary" />
        <section className="bg-secondary w-full xl:h-96 lg:h-96 sm:h-96 h-64 bg-cover flex justify-center items-center">
          <h1 className="text-white font-black uppercase xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
            SEO
          </h1>
        </section>
        <section className=" bg-white xl:py-40 lg:py-40 sm:py-40 py-20">
          <div className="flex max-w-screen-xl mx-auto items-center gap-10 xl:flex-row lg:flex-row sm:flex-col flex-col px-4 sm:px-4 lg:px-4 xl:px-0">
            <div className="xl:w-1/2 lg:w-1/2 sm:w-full w-full ">
              <h2 className="text-secondary font-bold xl:text-5xl lg:text-5xl sm:text-4xl text-3xl leading-snug">
              ¿Necesitas ayuda con tu SEO?
              </h2>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 sm:w-full w-full">
              <Image
                src="/img/banners/seo.svg"
                width={800}
                height={200}
                alt="diseño web"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>
        <section className="pb-10">
          <hr />
          <div className="w-full max-w-screen-xl mx-auto -mt-6">
            <div className="uppercase  inline-block bg-white px-5 py-3 text-secondary">
              <span className="flex items-center gap-2 font-medium ">
                <GoArrowDownRight className="text-xl" />
                Aspectos a cubrir
              </span>
            </div>
          </div>
        </section>
        <section className="mb-32">
          <div className="w-full max-w-screen-xl mx-auto flex gap-5 flex-col px-4 sm:px-4 lg:px-4 xl:px-0">
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                01
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-bold text-2xl mb-5">Estrategia</h3>
                <ul className="list-disc pl-5 text-lg">
                  <li>Establecimiento de objetivos</li>
                  <li>Análisis de la competencia</li>
                  <li>KeyWord Research</li>
                </ul>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex hover:bg-primary transition-all duration-500 hover:border-primary group xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                02
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-bold text-2xl mb-5">SEO On page</h3>
                <ul className="list-disc pl-5 text-lg">
                  <li>Server performance</li>
                  <li>Domain &amp; URLs</li>
                  <li>Imágenes</li>
                  <li>Meta Tags</li>
                  <li>Programación</li>
                  <li>Estructura interna de links</li>
                  <li>Redes Sociales</li>
                  <li>Versión móvil</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                03
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-bold text-2xl mb-5">SEO Off Page</h3>
                <ul className="list-disc pl-5 text-lg">
                  <li>Enlaces entrantes.</li>
                  <li>Dominios enlazantes.</li>
                  <li>IP-C</li>
                  <li>Follow-Nofollow</li>
                  <li>Google Places</li>
                  <li>Redes Sociales</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-32 mt-10">
            <a
              href="https://wa.link/rm7wow" target="_blank"
              className={`a-btn text-black border py-5 px-10 inline-block rounded-full ${styles.abtn} relative overflow-hidden group border-neutral-300 hover:border-primary transition-all duration-300 ease-in-out delay-100`}
            >
              <span className="text-white z-50 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out ">
                Cotizar Planes
              </span>{" "}
              Cotizar Planes
            </a>
          </div>
        </section>
      </Layout>
    </main>
  );
}
