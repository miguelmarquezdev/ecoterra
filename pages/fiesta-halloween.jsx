import Layout from "../components/layout";
import HeaderTwo from "../components/header-dos";
import { IoBedOutline } from "react-icons/io5";
import { PiShower } from "react-icons/pi";
import { PiToiletLight } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { FaMosquitoNet } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";
import { motion } from 'framer-motion';

export default function FiestaHalloween() {
  return (
    <main>
      <Layout
        title={"Habitaciones"}
        description={"Lista de Habitaciones"}
      >
        <HeaderTwo bgslate="bg-secondary" />
          {/* Sección de Encabezado con animación */}
      <header className="relative bg-cover bg-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black bg-opacity-60"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex flex-col items-center justify-center h-full space-y-6"
        >
          <motion.h1
            className="text-5xl font-bold uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Fiesta de Halloween en EcoTerra Lodge
          </motion.h1>
          <motion.p
            className="text-lg font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            ¡Una noche inolvidable llena de sorpresas, diversión y experiencias terroríficas!
          </motion.p>
          <motion.a
            href="#packages"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-full uppercase tracking-wide font-semibold transition transform hover:scale-110"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Ver Paquetes
          </motion.a>
        </motion.div>
      </header>

      {/* Sección de Paquetes con animación al hacer scroll */}
      <section id="packages" className="py-16 px-4 lg:px-32 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nuestros Paquetes de Halloween
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paquete 1 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Paquete Básico Espeluznante</h3>
            <p className="text-lg mb-6">
              Una experiencia emocionante para una noche llena de diversión. Ideal para familias o pequeños grupos que
              buscan una escapada aterradora.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 bg-orange-600 hover:bg-orange-700 rounded-full uppercase tracking-wide font-semibold"
            >
              Reservar Ahora
            </a>
          </motion.div>

          {/* Paquete 2 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Paquete VIP Aterrador</h3>
            <p className="text-lg mb-6">
              Disfruta lo mejor de la noche de Halloween con ventajas exclusivas, entretenimiento espeluznante y más.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 bg-orange-600 hover:bg-orange-700 rounded-full uppercase tracking-wide font-semibold"
            >
              Reservar Ahora
            </a>
          </motion.div>

          {/* Paquete 3 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Paquete de Terror Definitivo</h3>
            <p className="text-lg mb-6">
              ¡Para los verdaderos fanáticos del horror! Una noche de diversión aterradora con acceso exclusivo a todos
              los eventos.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 bg-orange-600 hover:bg-orange-700 rounded-full uppercase tracking-wide font-semibold"
            >
              Reservar Ahora
            </a>
          </motion.div>
        </div>
      </section>
      </Layout>
    </main>
  );
}
