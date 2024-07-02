import Layout from "../components/layout";
import HeaderTwo from "../components/header-dos";

export default function BarRestaurante() {
  return (
    <main>
      <Layout title={"Bar Restaurante"} description={"Nuestra Carta"}>
        <HeaderTwo bgslate="bg-secondary" />
        <section className="w-full max-w-screen-xl mx-auto">
          <div className=" h-20 flex justify-center items-center bg-cover bg-center">
            <div>
              <h1 className="text-black font-black xl:text-4xl lg:text-4xl sm:text-3xl text-3xl mb-10">
                Bar & Restaurante
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto pb-20">
          <div className="bg-gray-100">
            {/* Gallery Section */}
            <section className="py-20 px-10 bg-laight">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Galería
              </h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <img
                  src="../img/banners/imagen-1.jpg"
                  alt="Gallery Image 1"
                  className="w-full  object-cover "
                />
                <img
                  src="../img/banners/imagen-2.jpg"
                  alt="Gallery Image 2"
                  className="w-full  object-cover "
                />
                <img
                  src="../img/banners/imagen-3.jpg"
                  alt="Gallery Image 3"
                  className="w-full  object-cover "
                />
                <img
                  src="../img/banners/imagen-4.jpg"
                  alt="Gallery Image 4"
                  className="w-full  object-cover "
                />
              </div>
            </section>

            {/* Menu Section */}
            <section className="py-20 px-10 bg-white">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Menú
              </h2>
              <div className="mt-10 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold">Entradas</h3>
                    <ul className="mt-5 space-y-2">
                      <li>Ensalada César - $10</li>
                      <li>Bruschetta - $8</li>
                      <li>Calamares Fritos - $12</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Platos Principales</h3>
                    <ul className="mt-5 space-y-2">
                      <li>Filete Mignon - $25</li>
                      <li>Paella - $20</li>
                      <li>Ravioles de Espinaca - $18</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Postres</h3>
                    <ul className="mt-5 space-y-2">
                      <li>Tiramisú - $7</li>
                      <li>Cheesecake - $8</li>
                      <li>Helado Artesanal - $6</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Bebidas</h3>
                    <ul className="mt-5 space-y-2">
                      <li>Margarita - $10</li>
                      <li>Mojito - $9</li>
                      <li>Vino Tinto - $8</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Layout>
    </main>
  );
}
