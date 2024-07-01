import Image from "next/image";
import Layout from "../components/layout";
import HeaderTwo from "../components/header-dos";
import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";

export default function WebDesign() {
  return (
    <main>
      <Layout
        title={"Diseño Web"}
        description={"Sobre Nosotros, guitarLA Tienda de Música"}
      >
        <HeaderTwo bgslate="bg-secondary " />
        <section className="bg-secondary w-full xl:h-96 lg:h-96 sm:h-96 h-64 bg-cover flex justify-center items-center">
          <h1 className="text-white font-black uppercase xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
            Diseño Web
          </h1>
        </section>
        <section className=" bg-white xl:py-40 lg:py-40 sm:py-40 py-20">
          <div className="flex max-w-screen-xl mx-auto items-center gap-10 xl:flex-row lg:flex-row sm:flex-col flex-col px-4 sm:px-4 lg:px-4 xl:px-0">
            <div className="xl:w-1/2 lg:w-1/2 sm:w-full w-full ">
              <h2 className="text-secondary font-bold xl:text-5xl lg:text-5xl sm:text-4xl text-3xl leading-snug">
                Empieza tu proyecto web y sobresale por encima de la competencia
              </h2>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 sm:w-full w-full">
              <Image
                src="/img/banners/design.svg"
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
            <div className="uppercase  inline-block bg-white px-5 py-3 text-primary">
              <span className="flex items-center gap-2 font-medium ">
                <GoArrowDownRight className="text-xl" />
                Planes de Diseño Web
              </span>
            </div>
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-4 lg:px-4 xl:px-0">
         <div className="flex xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-5 gap-5 xl:mb-32 lg:mb-32 mb-0 sm:mb-32">
         <p className="text-xl leading-10 font-medium xl:w-1/2 lg:w-1/2 sm:w-1/2 w-full xl:mb-32 lg:mb-32 mb-0 sm:mb-32">
            Nuestras tarifas son como opciones de helado: puedes elegir el plan
            que más te guste y que sea perfecto para ti.
          </p>
          <p className=" xl:w-1/2 lg:w-1/2 sm:w-1/2 w-full text-lg">
         Creamos experiencias digitales cautivadoras que hacen brillar a tu marca en línea. Desde sitios web elegantes y funcionales hasta plataformas interactivas que cautivan a tu audiencia, nuestro equipo de diseñadores y desarrolladores expertos se dedica a transformar tus ideas en realidad. Con una combinación de creatividad, tecnología de vanguardia y un enfoque centrado en el usuario, te ayudamos a destacarte en un mundo digital en constante evolución. Descubre cómo podemos llevar tu presencia en línea al siguiente nivel y hacer que tu marca se destaque en la web.
          </p>
         </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8 mb-16 mt-16 sm:mt-0 xl:mt-0 lg:mt-0 ">
            <div className="p-14 rounded-lg shadow-lg bg-secondary text-white flex flex-col gap-6">
            <Image
                src="/img/banners/basic.svg"
                width={150}
                height={150}
                alt="diseño web"
                className="rounded-xl mx-auto"
              />
              <h3 className="font-bold text-3xl">Paquete Básico</h3>
              <span className="text-2xl">¿Qué Incluye?</span>
              <ul className="list-disc ml-5 text-lg">
                <li>Hosting (1 Año)</li>
                <li>Dominio (1 Año)</li>
                <li>Correos Corporativos</li>
                <li>Páginas Internas (10)</li>
                <li>Adaptable a cualquier dispositivo</li>
                <li>100% Administrable</li>
                <li>Seguro SSL</li>
                <li>Formularios de Contacto</li>
              </ul>
            </div>
            <div className="p-14 rounded-lg shadow-lg bg-secondary text-white flex flex-col gap-5">
            <Image
                src="/img/banners/medio.svg"
                width={200}
                height={150}
                alt="diseño web"
                className="rounded-xl mx-auto"
              />
              <h3 className="font-bold text-3xl">Paquete Intermedio</h3>
              <span className="text-2xl">¿Qué Incluye?</span>
              <ul className="list-disc ml-5 text-lg">
                <li>Hosting (2 Años)</li>
                <li>Dominio (2 Años)</li>
                <li>Correos Corporativos</li>
                <li>Páginas Internas (15)</li>
                <li>Adaptable a cualquier dispositivo</li>
                <li>100% Administrable</li>
                <li>Seguro SSL</li>
                <li>Formularios de Contacto</li>
                <li>Logotipo</li>
                <li>Creación de R. Sociales</li>
                <li>Mapa de Google Bussiness</li>
              </ul>
            </div>
            <div className="p-14 rounded-lg shadow-lg bg-secondary text-white flex flex-col gap-5">
            <Image
                src="/img/banners/pro.svg"
                width={250}
                height={150}
                alt="diseño web"
                className="rounded-xl mx-auto"
              />
              <h3 className="font-bold text-3xl">Paquete Completo</h3>
              <span className="text-2xl">¿Qué Incluye?</span>
              <ul className="list-disc ml-5 text-lg">
              <li>Hosting (3 Años)</li>
                <li>Dominio (3 Años)</li>
                <li>Correos Corporativos</li>
                <li>Páginas Internas (20)</li>
                <li>Adaptable a cualquier dispositivo</li>
                <li>100% Administrable</li>
                <li>Seguro SSL</li>
                <li>Formularios de Contacto</li>
                <li>Logotipo</li>
                <li>Creación de R. Sociales</li>
                <li>Google Bussiness</li>
                <li>Asesoramiento de Ventas</li>
                <li>Analitica Web</li>
                <li>Diseño totalmente PERSONALIZADO</li>
                <li>Pasarelas de Pago</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mb-32">
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
