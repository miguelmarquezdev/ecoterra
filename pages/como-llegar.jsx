import Image from "next/image";
import Layout from "../components/layout";
import HeaderTwo from "../components/header-dos";
import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";

export default function ComoLlegar() {
  return (
    <main>
      <Layout
        title={"Como llegar a Ecoterra Lodge"}
        description={"Sigue las indicaciones para llegar"}
      >
        <HeaderTwo bgslate="bg-secondary" />
        <section className="w-full max-w-screen-xl mx-auto">
          <div className=" h-20 flex justify-center items-center bg-cover bg-center">
            <div>
              <h1 className="text-black font-black xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
                ¿Cómo Llegar a Ecoterra lodge?
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto max-w-screen-lg pt-10 pb-20">
          <div class="elementor-widget-container wp-content first-line:uppercase first-line:tracking-widest   first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left text-justify">
            <h3>Si tienes tu propia movilidad</h3>
            <p>
              Puedes dirigirte al Valle Sagrado a través de la carretera
              asfaltada que conduce al encantador pueblo inca de Ollantaytambo.
              Este emocionante recorrido te lleva a través de paisajes
              montañosos y pintorescos pueblos andinos, donde podrás disfrutar
              de la belleza natural de la región. Una vez en Ollantaytambo, tu
              viaje continuará hacia las majestuosas alturas del Nevado
              Verónica, también conocido como el Paso de Abra Málaga, alcanzando
              una impresionante altitud de 4316 metros sobre el nivel del mar.
              Aquí, disfrutaras del paisaje de montañas nevadas, en el trayecto
              veras encantadoras cabañas rústicos que son el hogar de los
              lugareños que viven en armonía con la naturaleza.
            </p>
            <h4>
              Después del paso, descenderás hacia la selva tropical de Santa
              María. Desde este punto, tomarás el desvío que te lleva hacia
              Santa Teresa. A pocos kilómetros, encontrarás Eco Terra Lodge,
              listo para recibirte con su hospitalidad y comodidad, en medio de
              la exuberante naturaleza de la región.
            </h4>
            <h3>Si no tiene movilidad propia</h3>
            <p>
              <strong>
                Puede optar por los siguientes servicios que ayudaran su
                planificación de sus vacaciones{" "}
              </strong>
            </p>
            <h4>
              <strong>Día 01: transporte Cusco – Eco Terra Lodge </strong>
            </h4>
            <p>
              Contamos con servicio de transporte todos los días del año que
              inicia con el recojo desde la Plaza Mayor de Cusco o su hotel
              entre las 6 y 7 am. Nos dirigiremos en una minivan turística con
              paradas cercanas al pueblo de Ollantaytambo para utilizar
              servicios higiénicos y tomar algún refrigerio o desayuno opcional.
              Luego, subiremos al Abra Málaga para una foto con el impresionante
              nevado antes de descender al pintoresco pueblo de Santa María.
              Finalmente, llegaremos a Eco Terra Lodge, donde recibirá una
              refrescante bebida de bienvenida y se instalará en sus
              habitaciones reservadas.&nbsp;
            </p>
            <p>
              <strong>
                <em>
                  Costo de servicio de transporte turístico Cusco – Eco Terra
                  Lodge s/ 60 soles por persona{" "}
                </em>
              </strong>
              El tiempo total de viaje será de aproximadamente 4 horas. En el
              Lodge, tendrá la opción de participar en diversas actividades
              adicionales por un costo adicional.
            </p>
            <p>
              <strong>
                Servicios y actividades disponibles a la llegada a Eco Terra:{" "}
              </strong>
            </p>
            <ul>
              <li>Almuerzo con platos típicos a la carta (costo extra).</li>
              <li>Menú turístico disponible por S/ 20.</li>
            </ul>
            <p>
              <strong>
                <u>Atractivos:</u>{" "}
              </strong>
            </p>
            <ul>
              <li>
                Por la tarde, puede unirse a la emocionante actividad de rafting
                en el río, adecuada tanto para expertos como para principiantes,
                con un costo adicional de S/ 80. Esta actividad es sugerida por
                el clima tropical que llega hasta 35 grados de temperatura y
                disfrutar las aguas fresca del rio de la zona. (Galeria Foto)
              </li>
              <li>
                Servicio de transporte desde eco terra para visitar la catarata
                de Yanay Mandor tiempo de viaje 30 minutos costo de auto privado
                para 4 personas s/150 soles (Galeria Foto) TRANSPORTES &amp;
                ACTIVIDADES
              </li>
            </ul>
            <h4>
              <strong>
                Día 02: opciones de actividad o servicio de transporte a Cocal
                Mayo, santa teresa, (ZIPLINE) hidroeléctrica o retorno a Cusco{" "}
              </strong>
            </h4>
            <ul>
              <li>
                Disfrute de un desayuno americano incluido en el precio del
                Lodge, o si lo prefiere, desayuno a la carta por un costo
                adicional. horario disponible de 5 a 8 am
              </li>
              <li>
                Transporte desde Eco Terra Lodge hacia la base de operaciones de
                la actividad más popular en la zona (ZIPLINE), S/ 100 por
                persona, incluye trasporte ida y vuelta, equipo completo de la
                actividad de zipline (4 cables cada uno de 500 a 800 metros de
                longitud, y un puente tibetano de 90 metros de largo) con un
                tiempo de viaje de 30 minutos. (Galeria Foto) Transporte desde
                Eco Terra Lodge hacia los baños termales de Cocalmayo por S/ 20
                por persona, con un tiempo de viaje de 35 minutos. (Galeria
                Foto)
              </li>
              <li>
                Si desea dirigirse al pueblo de Aguas Calientes y luego subir a
                Machu Picchu, puede optar por el transporte desde Cocalmayo
                hacia la Hidroeléctrica por S/ 20 por persona, con un tiempo de
                viaje de 30 minutos.
              </li>
              <li>
                Si prefiere ir al pueblo de Santa Teresa, encontrará taxis y
                colectivos locales en Cocalmayo, con tarifas entre 4 y 6 soles
                por persona. El pueblo es muy seguro, por lo que no debe
                preocuparse por la seguridad.
              </li>
              <li>
                Finalmente, ofrecemos transporte de retorno directo desde
                hidroeléctrica o el pueblo de Santa Teresa a Cusco por S/ 60 por
                persona. Horario de salida todo los días desde hidroeléctrica de
                2 a 3pm y desde santa teresa de 3 a 4 pm, tiempo de viaje 6
                horas hasta cusco.
              </li>
            </ul>{" "}
          </div>
        </section>
      </Layout>
    </main>
  );
}
