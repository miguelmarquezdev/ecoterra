import Layout from "../components/layout";
import Header from "../components/header";
import Link from "next/link";
import styles from "../styles/grid.module.css";
import { GoArrowDownRight } from "react-icons/go";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

export default function Home({ resultado, trabajos, blogs }) {
  console.log(resultado);
  return (
    <Layout
      title={"Ecoterra Lodge"}
      description={"Ecoterra Lodge, Alojamiento restaurante en Santa Teresa"}
    >
      <Header bgslate="bg-transparent absolute w-full z-10" />
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
          <div className="w-full sm:w-full lg:w-7/12   bg-ecoterra h-full bg-cover bg-center before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-black/40 before:to-black/10 relative"></div>
        </div>
        <div className="flex  items-center relative h-full w-full mx-auto max-w-screen-xl sm:px-4 px-4 lg:px-4 xl:px-4 2xl:p-0">
          <div className="space-y-10 max-w-screen-md">
            <h1 className="text-white md:text-7xl font-bold max-w-screen-xl w-4/5 text-4xl md:leading-none">
              Escapate a la tranquilidad de la naturaleza.
            </h1>
            <p className="text-white text-md">
              {" "}
              Ubicado en el corazón de Santa Teresa, Ecoterra Lodge es el
              refugio perfecto para quienes buscan desconectar y disfrutar de la
              serenidad de la naturaleza sin sacrificar el confort y la
              conveniencia. Nuestro lodge ofrece una experiencia única en un
              entorno tropical, ideal tanto para aventureros como para aquellos
              que desean relajarse bajo el sol.
            </p>
          </div>
        </div>
      </div>
      <main className="relative">
        <section className="w-full max-w-screen-xl mx-auto py-20 relative">
          <h2 className="text-center font-bold text-3xl text-secondary mb-10">
            Nuestras Habitaciones
          </h2>
          <div className="grid grid-cols-2 relative gap-10">
            <div className="relative overflow-hidden">
              <img
                src="../img/banners/primera-foto.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="group-hover:scale-125 object-cover"
              />
              <div className="bg-white text-black absolute bottom-5 left-5 p-5 rounded-md">
                <h3 className="font-bold text-2xl">Habitación Doble</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Especial para parejas
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="../img/banners/habitacion-dos.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="group-hover:scale-125 object-cover"
              />
              <div className="bg-white text-black absolute bottom-5 left-5 p-5 rounded-md">
                <h3 className="font-bold text-2xl">Habitación Matrimonial</h3>
                <p className="text-neutral-500 font-light text-sm">
                  Pudes Añadir una cama
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <a className="border border-black py-3 px-7 text-black hover:bg-black hover:text-white transition-all duration-300">
              Ver todas las Habitaciones
            </a>
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto pb-20 relative mb-20">
          <h2 className="text-center font-bold text-3xl text-secondary mb-10">
            Actividades
          </h2>
          <div className="grid grid-cols-3 relative gap-10 ">
            <div className="xl:pt-16">
              <h3 className="font-bold text-2xl mb-10">
                Biking, Rafting, Zipline
              </h3>
              <p>
                Lo mejor en aventura extrema en Perú. La tirolesa Vertikal
                cuenta con uno de los circuitos más grandes de Sudamérica, con 4
                tirolesas que van de montaña en montaña con distancias desde 400
                metros hasta 950 metros, donde realizarás diferentes formas de
                vuelo, entre ellos el famoso vuelo del condor, también
                cruzaremos 1 puente colgante, vive una experiencia inolvidable.
                Nos ubicamos en Santa Teresa, la convención, Cusco.
              </p>
              <a
                href="https://wa.link/bzlfw6" target="_blank"
                className="border border-black py-3 px-7 bg-secondary text-white hover:bg-black hover:text-white transition-all duration-300 inline-block mt-10"
              >
              Solicitar Información
              </a>
            </div>
            <div className="relative">
              <img
                src="../img/banners/biking.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="absolute reveal fade-right top-16  w-96 h-[30rem] object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="../img/banners/rafting.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="lg:block hidden absolute reveal fade-right right-0 w-96 lg:h-[28rem] h-80 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto py-20 relative">
          <div className="grid grid-cols-3 relative gap-10 ">
            <div className="relative">
              <img
                src="../img/banners/aguas-termales.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="absolute reveal fade-right top-16  w-96 h-[30rem] object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="../img/banners/cocalmayo.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="lg:block hidden absolute reveal fade-right right-0 w-96 lg:h-[28rem] h-80 object-cover"
              />
            </div>
            <div className="xl:pt-16">
              <h3 className="font-bold text-2xl mb-10">
                Baños Termales de Cocalmayo
              </h3>
              <p>
                Lo mejor en aventura extrema en Perú. La tirolesa Vertikal
                cuenta con uno de los circuitos más grandes de Sudamérica, con 4
                tirolesas que van de montaña en montaña con distancias desde 400
                metros hasta 950 metros, donde realizarás diferentes formas de
                vuelo, entre ellos el famoso vuelo del condor, también
                cruzaremos 1 puente colgante, vive una experiencia inolvidable.
                Nos ubicamos en Santa Teresa, la convención, Cusco.
              </p>
              <a
                href="https://wa.link/bzlfw6" target="_blank"
                className="border border-black py-3 px-7 bg-secondary text-white hover:bg-black hover:text-white transition-all duration-300 inline-block mt-10"
              >
                Solicitar Informacion
              </a>
            </div>
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto py-20 relative">
          <div className="grid grid-cols-3 relative gap-10 ">
            <div className="xl:pt-16">
              <h3 className="font-bold text-2xl mb-10">Tours Populares</h3>
              <p>
                Lo mejor en aventura extrema en Perú. La tirolesa Vertikal
                cuenta con uno de los circuitos más grandes de Sudamérica, con 4
                tirolesas que van de montaña en montaña con distancias desde 400
                metros hasta 950 metros, donde realizarás diferentes formas de
                vuelo, entre ellos el famoso vuelo del condor, también
                cruzaremos 1 puente colgante, vive una experiencia inolvidable.
                Nos ubicamos en Santa Teresa, la convención, Cusco.
              </p>
              <a
                href="https://sapadventures.org/tour/inca-jungle-trek-4-days/" target="_blank"
                className="border border-black py-3 px-7 bg-secondary text-white hover:bg-black hover:text-white transition-all duration-300 inline-block mt-10"
              >
                Ver Tours
              </a>
            </div>
            <div className="relative">
              <img
                src="../img/banners/inca-jungle.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="absolute reveal fade-right top-16  w-96 h-[30rem] object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="../img/banners/inca-jungle-peru.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="lg:block hidden absolute reveal fade-right right-0 w-96 lg:h-[28rem] h-80 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="mt-10 w-full max-w-screen-xl mx-auto py-20 relative">
          <h2 className="text-center font-bold text-3xl text-secondary mb-10">
            Comentarios de nuestros clientes
          </h2>
          <div className="flex justify-center my-8 gap-2 items-center">
            <div className="text-5xl text-bold">5.0</div>
            <div className="w-14">de 5 Estrellas</div>
            <div className="flex gap-2">
              <IoIosStar className="text-4xl" />
              <IoIosStar className="text-4xl" />
              <IoIosStar className="text-4xl" />
              <IoIosStar className="text-4xl" />
              <IoIosStar className="text-4xl" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="border border-neutral-300 p-5 space-y-3">
              <h3 className="font-bold text-xl">Mari jrz rmz</h3>
              <span className="text-sm text-neutral-500">20/03/2024</span>
              <p className="italic">
                Fuimos por parte de un tour, sobre la ubicación me pareció bien
                pero nos llevaron y nos recogieron, por cuenta propia no sé cómo
                sea. Nos encantó el lugar, muy bonito y las habitaciones súper
                bien
              </p>
            </div>
            <div className="border border-neutral-300 p-5 space-y-3">
              <h3 className="font-bold text-xl">sandra p </h3>
              <span className="text-sm text-neutral-500">10/11/2023</span>
              <p className="italic">
              Atención cálida y de primera..habitación y camas limpias y confortables.. despertar con el canto de las aves fue una experiencia inolvidable..disfrutamos del paseo y baño en la catarata dentro de la propiedad y de la lección sobre el café...
              </p>
            </div>
            <div className="border border-neutral-300 p-5 space-y-3">
              <h3 className="font-bold text-xl">Marat Azatjan</h3>
              <span className="text-sm text-neutral-500">07/01/2024</span>
              <p className="italic ">
              Me encantó la corta estancia en Eco Terra Lodge. Puede relajarse, contemplar el cielo nocturno despejado sin contaminación lumínica, respirar aire limpio, relajarse con el sonido del río y, por supuesto, comer excelente comida, servida por un equipo cálido y acogedor. También podrás meditar y hacer yoga para prepararte para los próximos días en tu caminata a Machu Picchu. Saludos cordiales al equipo y deseando éxito en su proyecto para reforestar aún más esta área. 👌👌👌
              </p>
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
