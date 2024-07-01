import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";
export default function Footer() {
  return (
    <footer className="relative">
      <section className= {`${styles.burbujastwo} bg-secondary h-screen relative overflow-hidden`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="w-full max-w-screen-xl mx-auto ">
          <div className="flex flex-col justify-center items-center h-screen">
            <div className=" uppercase text-primary flex items-center gap-2 mb-10">
              <GoArrowDownRight className="text-xl" />
              Contactar
            </div>
            <h2 className="text-white lg:text-5xl xl:text-5xl text-3xl sm:text-5xl font-bold block text-center leading-snug sm:leading-relaxed">
              Tienes más preguntas <br /> ¿Café o té?
            </h2>
            <div className="flex justify-center">
              <a
                href="https://wa.link/rm7wow"
                target="_blank"
                className={`a-btn text-black bg-white border py-5 px-10 inline-block rounded-full mt-16 ${styles.abtn} relative overflow-hidden group border-neutral-300 hover:border-primary transition-all duration-300 ease-in-out delay-100`}
              >
                <div className="text-white z-50 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out ">
                  Iniciar Conversación
                </div>{" "}
                Iniciar Conversación
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`bg-secondary text-white text-center text-md py-16 border-t border-white/10`}
      >
        <div className="w-full max-w-screen-xl mx-auto grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:px-4 sm:gap-10 lg:gap-10 xl:gap-10 gap-10 px-4 lg:px-4">
          <div>
            <span className=" uppercase text-white/50 flex items-center gap-2 mb-3">
              <GoArrowDownRight className="text-xl" />
              WHATSAPP
            </span>
            <p className="text-white xl:text-2xl lg:text-2xl text-xl sm:text-2xl text-left">
              <a href="https://wa.link/rm7wow" target="_blank">
                +51 937 253 787
              </a>
            </p>
          </div>
          <div>
            <span className=" uppercase text-white/50 flex items-center gap-2 mb-3">
              <GoArrowDownRight className="text-xl" />
              CORREO ELECTRÓNICO
            </span>
            <p className="text-white xl:text-2xl lg:text-2xl text-xl sm:text-2xl text-left">
              <a href="https://wa.link/rm7wow" target="_blank">
                info@miasolutions.com
              </a>
            </p>
          </div>
          <div>
            <span className=" uppercase text-white/50 flex items-center gap-2 mb-3">
              <GoArrowDownRight className="text-xl" />
              DIRECCIÓN
            </span>
            <p className="text-white xl:text-2xl lg:text-2xl text-xl sm:text-2xl text-left">
              <a href="https://wa.link/rm7wow" target="_blank">
                Av. Peru Lote B MZ. E-8
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
