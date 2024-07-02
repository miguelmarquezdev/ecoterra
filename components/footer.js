import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";
import { ImWhatsapp } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="relative border-t border-t-neutral-300">
      <section className= {`${styles.burbujastwo} bg-laight h-screen relative overflow-hidden`}>
        <div className="w-full max-w-screen-xl mx-auto ">
          <div className="flex flex-col justify-center items-center h-screen">
            <div className=" uppercase text-primary flex items-center gap-2 mb-10">
              <GoArrowDownRight className="text-xl" />
              Contactar
            </div>
            <h2 className="text-black lg:text-5xl xl:text-5xl text-3xl sm:text-5xl font-bold block text-center leading-snug sm:leading-relaxed">
              Para Reservas
            </h2>
            <div className="flex justify-center">
              <a
                href="https://wa.link/bzlfw6"
                target="_blank"
                className={`block bg-secondary text-white py-3 px-7 mt-10 hover:bg-black transition-all duration-300`}
              >
               Iniciar Reserva
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`bg-laight text-black text-center text-md py-16 border-t border-t-neutral-300`}
      >
        <div className="w-full max-w-screen-xl mx-auto grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:px-4 sm:gap-10 lg:gap-10 xl:gap-10 gap-10 px-4 lg:px-4">
          <div>
            <span className=" uppercase text-black/50 flex items-center gap-2 mb-3">
              <GoArrowDownRight className="text-xl" />
              WHATSAPP
            </span>
            <p className="text-black xl:text-2xl lg:text-2xl text-xl sm:text-2xl text-left">
              <a href="#" target="_blank">
              +51 968 354 919
              </a>
            </p>
          </div>
          <div>
            <span className=" uppercase text-black/50 flex items-center gap-2 mb-3">
              <GoArrowDownRight className="text-xl" />
              CORREO ELECTRÓNICO
            </span>
            <p className="text-black xl:text-2xl lg:text-2xl text-xl sm:text-2xl text-left">
              <a href="#" target="_blank">
                ecoterralodge@gmail.com
              </a>
            </p>
          </div>
          <div>
            <span className=" uppercase text-black/50 flex items-center gap-2 mb-3">
              <GoArrowDownRight className="text-xl" />
              DIRECCIÓN
            </span>
            <p className="text-black xl:text-2xl lg:text-2xl text-xl sm:text-2xl text-left">
              <a href="#" target="_blank">
                Siete Cuartones 356, Cusco 08002
              </a>
            </p>
          </div>
        </div>
      </section>
      <a href="https://wa.link/bzlfw6" target="_blank" className="rounded-full w-14 h-14 flex items-center justify-center bg-secondary text-white fixed right-5 bottom-5"><ImWhatsapp className="text-3xl" />      </a>
    </footer>
    
  );
}
