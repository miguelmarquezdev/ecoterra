import Image from "next/image";
import Layout from "../components/layout";
import HeaderDos from "../components/header-dos";
import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";
import { LiaUsersSolid } from "react-icons/lia";
import { TbWorldWww } from "react-icons/tb";
import { GiSouthAmerica } from "react-icons/gi";




export default function Sem() {
  return (
    <main>
      <Layout
        title={"Publicidad - SEM"}
        description={"Sobre Nosotros, guitarLA Tienda de Música"}
      >
        <HeaderDos bgslate="bg-secondary" />
        <section className="bg-secondary w-full xl:h-96 lg:h-96 sm:h-96 h-64 bg-cover flex justify-center items-center">
          <h1 className="text-white font-black uppercase xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
            Publicidad
          </h1>
        </section>
        <section className=" bg-white xl:py-40 lg:py-40 sm:py-40 py-20">
          <div className="flex max-w-screen-xl mx-auto items-center gap-10 xl:flex-row lg:flex-row sm:flex-col flex-col px-4 sm:px-4 lg:px-4 xl:px-0">
            <div className="xl:w-1/2 lg:w-1/2 sm:w-full w-full ">
              <h2 className="text-secondary font-bold xl:text-5xl lg:text-5xl sm:text-4xl text-3xl leading-snug">
              Aumenta tu visibilidad con anuncios de alto impacto.
              </h2>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 sm:w-full w-full">
              <Image
                src="/img/banners/redes.svg"
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
                ¿Qué incluye nuestro servicio?
              </span>
            </div>
          </div>
        </section>
        <section className="mb-32">
          <div className="w-full max-w-screen-xl mx-auto grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-10 px-4 sm:px-4 lg:px-4 xl:px-0">
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:items-center sm:items-center items-start lg:items-center  xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                01
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-semibold text-xl ">
                  Estrategia de publicidad en base a objetivos.
                </h3>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:items-center sm:items-center items-start lg:items-center  xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                02
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-semibold text-xl ">
                  Creación y diseño de anuncios.
                </h3>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:items-center sm:items-center items-start lg:items-center  xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                03
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-semibold text-xl ">
                  Promoción de anuncios en redes.
                </h3>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:items-center sm:items-center items-start lg:items-center  xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                04
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-semibold text-xl ">
                Campañas en Facebook e Instagram.
                </h3>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:items-center sm:items-center items-start lg:items-center  xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                05
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-semibold text-xl ">
                Monitoreo de campañas publicitarias.
                </h3>
              </div>
            </div>
            <div className="border rounded-xl p-10 flex  hover:bg-primary transition-all duration-500 hover:border-primary group xl:items-center sm:items-center items-start lg:items-center  xl:flex-row lg:flex-row sm:flex-row flex-col xl:gap-10 lg:gap-10 sm:gap-10 gap-5">
              <span className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-white group-hover:text-secondary">
                06
              </span>
              <div className="group-hover:text-white transition-all duration-300">
                <h3 className="font-semibold text-xl ">
                Reporte mensual de estadísticas.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <hr />
          <div className="w-full max-w-screen-xl mx-auto -mt-6">
            <div className="uppercase  inline-block bg-white px-5 py-3 text-secondary">
              <span className="flex items-center gap-2 font-medium ">
                <GoArrowDownRight className="text-xl" />
                ¿Cuales son los beneficios?
              </span>
            </div>
          </div>
        </section>
        <section className="mb-32">
          <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-4 lg:px-4 xl:px-0">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1  gap-8 mb-16">
            <div className="p-14 rounded-lg shadow-lg bg-orange-600 text-white flex flex-col gap-6 justify-center items-center">
            <LiaUsersSolid className="text-7xl" />
              <h3 className="font-semibold text-2xl text-center">Generas leads potenciales y prospectos de clientes potenciales.</h3>
            </div>
            <div className="p-14 rounded-lg shadow-lg bg-indigo-600 text-white flex flex-col gap-6 justify-center items-center">
            <TbWorldWww className="text-7xl" />
              <h3 className="font-semibold text-2xl text-center">La publicidad en internet es mucho mas rentable que cualquier otra.</h3>
            </div>
            <div className="p-14 rounded-lg shadow-lg bg-lime-600 text-white flex flex-col gap-6 justify-center items-center">
            <GiSouthAmerica  className="text-7xl" />
              <h3 className="font-semibold text-2xl text-center">Te diriges al público en especifico que quieres vender.</h3>
            </div>
          </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
