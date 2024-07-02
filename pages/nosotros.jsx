import Image from "next/image";
import Layout from "../components/layout";
import HeaderTwo from "../components/header-dos";
import { GoArrowDownRight } from "react-icons/go";
import styles from "../styles/grid.module.css";

export default function Nosotros() {
  return (
    <main>
      <Layout
        title={"Sobre Ecoterra Lodge"}
        description={"Todo acerca de Ecoterra Lodge"}
      >
        <HeaderTwo bgslate="bg-secondary" />
        <section className="w-full max-w-screen-xl mx-auto">
          <div className=" h-20 flex justify-center items-center bg-cover bg-center">
            <div>
              <h1 className="text-black font-black xl:text-4xl lg:text-4xl sm:text-3xl text-3xl">
                Sobre Ecoterra Lodge
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto max-w-screen-lg pt-10 pb-20">
          <div class="elementor-widget-container wp-content first-line:uppercase first-line:tracking-widest   first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left text-justify">
            <img
              src="../img/banners/ecoterra.webp"
              width={1024}
              height={200}
              alt="diseño web"
              className="group-hover:scale-125 object-cover mb-5"
            />
            <p>
              Eco Terra Lodge es la opción perfecta para aquellos que desean
              vivir la emocionante aventura hacia la maravilla de Machu Picchu,
              por la ruta alterno al tren para evitar el monopolio y cupos
              limitados del servicio de tren, o simplemente para explorar los
              encantos culturales y naturales de manera diferente, ya sea en un
              vehículo propio o tomando transporte local. Estamos
              estratégicamente ubicado en el distrito de Santa Teresa, a unos
              183 km de Cusco, a través de la ruta Ollantaytambo – Abra Málaga –
              Santa Teresa – Hidroeléctrica. Eco Terra Lodge se encuentra cerca
              de encantadores pueblos como Santa María y Santa Teresa. Aquí,
              podrás disfrutar de emocionantes deportes de aventura como el
              canotaje (Rafting) en aguas cristalinas y la actividad extrema de
              tirolesa (Zipline), que te hará experimentar emociones de
              adrenalina. Además, estamos cerca de los famosos baños termales de
              Cocalmayo, donde podrás relajarte y recargar energías después de
              tus aventuras.
            </p>
            <p>
              Contamos con 22 habitaciones entre ellas tenemos habitaciones
              matrimoniales, dobles, triples, habitaciones con 4 y 8 camas,
              también se pueden adicionar una cama extra en las habitaciones
              matrimoniales en caso viajen con niños o bebe. cada habitación
              esta cuidadosamente diseñadas con arquitectura local y construidas
              con materiales de la región, ofreciendo vistas encantadoras de
              nuestros exuberantes jardines. Cada habitación con aproximadamente
              30m², cuenta con baño privado en cada habitación, agua caliente en
              las duchas, Wifi, mosquiteros para garantizar tu comodidad.&nbsp;
            </p>
            <p>
              Además de las cómodas habitaciones, Eco Terra Lodge ofrece una
              variedad de espacios comunes para el entretenimiento y la
              relajación, incluyendo áreas de fogatas, hamacas entre los
              bosques, salón de billar, futbol de mesa y columpios. Nuestro
              amplio comedor de 200m² también sirve como sala de reuniones ideal
              para talleres y cursos, rodeado de jardines llenos de flores y
              árboles de frutas tropicales. En nuestro restaurante, fusionamos
              sabores locales con la cocina peruana, ofreciendo platos típicos
              servidos en utensilios de piedra rústica.
            </p>
            <p>
              Además, los alrededores del Lodge cuentan con una extensa red de
              senderos de más de 15km que atraviesan nuestro bosque primario,
              ríos y campos agrícolas, ofreciendo una oportunidad excepcional
              para observar y visitar cataratas, así como la flora y fauna de la
              región.
            </p>
            <p>
              <strong>Como llegar a Eco Terra Lodge </strong>
            </p>
            <p>
              <strong>
                <em>
                  Te presentamos las cuatro opciones de ruta para llegar Eco
                  Terra Lodge:{" "}
                </em>
              </strong>
            </p>
            <ol>
              <li>
                **Vía terrestre asfaltada desde Cusco**: A través de la ruta
                Cusco – Ollantaytambo – Abra Málaga – Santa María, con un
                recorrido de aproximadamente 183 km en 4 horas.
              </li>
              <li>
                **Combinación de carro y tren desde Cusco**: Iniciando con un
                viaje en carro desde Cusco hasta Ollantaytambo de 1 hora y 20
                minutos, seguido por un viaje en tren desde Ollantaytambo hasta
                Aguas Calientes – Hidroeléctrica, finalmente se toma un
                transporte desde hidroeléctrica hasta el Lodge, con un total de
                aproximadamente 5 horas hasta llegar al Lodge.
              </li>
              <li>
                **Vía terrestre desde Ayacucho**: Comenzando en Ayacucho y
                pasando por Kimbiri, Quillabamba y Santa María, con un trayecto
                que incluye una combinación de vías asfaltadas y rutas
                todoterreno, aproximadamente 507 km en 13 horas.
              </li>
              <li>
                **Ruta desde Cusco a través de Pisac y Quellouno**: Partiendo
                desde Cusco y pasando por Pisac, Calca, Quellouno y Quillabamba,
                con un trayecto que combina vías asfaltadas y rutas todoterreno,
                aproximadamente 303 km en 7 horas.
              </li>
            </ol>
            <p>
              Cada opción ofrece una experiencia única, permitiéndote disfrutar
              del paisaje y la aventura en tu camino hacia nuestro Lodge.
            </p>
            <p>
              En Eco Terra Lodge, tu viaje hacia Machu Picchu se convierte en
              una experiencia inolvidable desde el momento en que pones un pie
              en nuestro paraíso natural. Te invitamos a descubrir la belleza de
              la región mientras te sumerges en la comodidad y la hospitalidad
              de nuestro Lodge. ¡Te esperamos con los brazos abiertos!
            </p>{" "}
          </div>
        </section>
      </Layout>
    </main>
  );
}
