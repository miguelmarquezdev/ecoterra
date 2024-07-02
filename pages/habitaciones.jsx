import Layout from "../components/layout";
import HeaderTwo from "../components/header-dos";
import { IoBedOutline } from "react-icons/io5";
import { PiShower } from "react-icons/pi";
import { PiToiletLight } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { FaMosquitoNet } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";

export default function Habitaciones() {
  return (
    <main>
      <Layout
        title={"Habitaciones"}
        description={"Lista de Habitaciones"}
      >
        <HeaderTwo bgslate="bg-secondary" />
        <section className="w-full max-w-screen-xl mx-auto">
          <div className=" h-20 flex justify-center items-center bg-cover bg-center">
            <div>
              <h1 className="text-black font-black xl:text-4xl lg:text-4xl sm:text-3xl text-3xl mb-10">
                Habitaciones
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto pb-20">
          <div className="grid grid-cols-3 gap-10">
            <div className="border">
              <img
                src="../img/banners/simple.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="group-hover:scale-125 object-cover"
              />
              <div className="py-7 px-5">
                <h2 className="font-bold text-xl mb-5">Habitacion Simple</h2>
                <ul className="grid grid-cols-3 gap-3 text-sm">
                  <li>
                    <IoBedOutline className="text-2xl" />
                    <span> 1 Cama 2P</span>
                  </li>
                  <li>
                    <PiTelevisionSimple className="text-2xl" />
                    <span>TV</span>
                  </li>
                  <li>
                    <PiToiletLight className="text-2xl" />
                    <span>Baño Privado</span>
                  </li>
                  <li>
                    <FaWifi className="text-2xl" />
                    <span>Wifi</span>
                  </li>
                  <li>
                    <PiShower className="text-2xl" />
                    <span>Ducha Caliente</span>
                  </li>

                  <li>
                    <FaMosquitoNet className="text-2xl" />
                    <span>Mosquitero</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border">
              <img
                src="../img/banners/primera-foto.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="group-hover:scale-125 object-cover"
              />
              <div className="py-7 px-5">
                <h2 className="font-bold text-xl mb-5">Habitacion Doble</h2>
                <ul className="grid grid-cols-3 gap-3 text-sm">
                  <li>
                    <IoBedOutline className="text-2xl" />
                    <span> 2 Cama 1 1/2P</span>
                  </li>
                  <li>
                    <PiTelevisionSimple className="text-2xl" />
                    <span>TV</span>
                  </li>
                  <li>
                    <PiToiletLight className="text-2xl" />
                    <span>Baño Privado</span>
                  </li>
                  <li>
                    <FaWifi className="text-2xl" />
                    <span>Wifi</span>
                  </li>
                  <li>
                    <PiShower className="text-2xl" />
                    <span>Ducha Caliente</span>
                  </li>

                  <li>
                    <FaMosquitoNet className="text-2xl" />
                    <span>Mosquitero</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border">
              <img
                src="../img/banners/habitacion-dos.webp"
                width={800}
                height={200}
                alt="diseño web"
                className="group-hover:scale-125 object-cover"
              />
              <div className="py-7 px-5">
                <h2 className="font-bold text-xl mb-5">Habitacion Matrimonial</h2>
                <ul className="grid grid-cols-3 gap-3 text-sm">
                  <li>
                    <IoBedOutline className="text-2xl" />
                    <span> 2 Cama 2P + 1</span>
                  </li>
                  <li>
                    <PiTelevisionSimple className="text-2xl" />
                    <span>TV</span>
                  </li>
                  <li>
                    <PiToiletLight className="text-2xl" />
                    <span>Baño Privado</span>
                  </li>
                  <li>
                    <FaWifi className="text-2xl" />
                    <span>Wifi</span>
                  </li>
                  <li>
                    <PiShower className="text-2xl" />
                    <span>Ducha Caliente</span>
                  </li>

                  <li>
                    <FaMosquitoNet className="text-2xl" />
                    <span>Mosquitero</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
