import { Button } from "@/components/ui/button";
import { Link } from "@heroui/link";
import DefaultLayout from "@/layouts/default"; // Asegúrate de que la ruta sea correcta

const cards = [
  {
    id: 1,
    image: "/src/img/agropecuarioimg.jpeg",
    description: "Espacio organizado y fresco, donde se resguardan con cuidado insumos, herramientas y productos del campo, listos para impulsar el trabajo agrícola con eficiencia y orden.",
    link: "/agropecuario",
  },
  {
    id: 2,
    image: "/src/img/ambientalimg.jpeg",
    description: "Espacio responsable y ordenado, diseñado para almacenar materiales y recursos con criterios sostenibles, cuidando cada detalle en armonía con el medio ambiente.",
    link: "/ambiental",
  },
  {
    id: 3,
    image: "/src/img/cafeimg.jpeg",
    description: "Espacio cálido y aromático donde se conservan granos, utensilios y esencias del café, preservando su frescura y sabor para cada taza perfecta.",
    link: "/escuelacafe",
  },
  {
    id: 4,
    image: "/src/img/gastronomiaimg.jpeg",
    description: "Ambiente pulcro y bien conservado, donde ingredientes, utensilios y productos gourmet se almacenan con cuidado, conservando la esencia y calidad de la cocina.",
    link: "/gastronomia",
  },
  {
    id: 5,
    image: "/src/img/ticsimg.jpeg",
    description: "Entorno seguro y organizado donde se almacenan equipos, componentes y tecnología, listos para apoyar soluciones digitales con eficiencia e innovación.",
    link: "/tic",
  },
  {
    id: 6,
    image: "/src/img/viasimg.jpeg",
    description: "Espacio técnico y ordenado donde se almacenan materiales e insumos esenciales para la construcción y mantenimiento de caminos, impulsando el desarrollo vial con precisión y seguridad.",
    link: "/vias",
  },
];

const InventoryLanding = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800 flex flex-col font-sans">
        {/* Main content */}
        <main className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 flex-grow">
          {/* Left image */}
          <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
            <img
              src="src/img/bodegas.jpeg"
            
              className="rounded-xl mx-auto max-h-60 object-cover"
            />
          </div>

          {/* Right description */}
          <div className="md:w-2/3 text-center md:text-left space-y-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 leading-snug">
              Bodegas : Espacios de Aprendizaje y Desarrollo
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Las bodegas del SENA están diseñadas como centros de almacenamiento especializados, adaptados para diversas áreas de formación y desarrollo profesional. Estos espacios no solo sirven como almacenes, sino también como lugares donde se promueve el aprendizaje práctico, impulsando la capacitación de estudiantes en diferentes sectores productivos.
              <br />
              <br />
              Cada bodega tiene una función específica, alineada con los objetivos de formación en distintas áreas, como agropecuario, ambiental, gastronomía, TIC y más. Cada espacio está optimizado para ofrecer el mejor entorno de trabajo, garantizando la seguridad y el orden en el almacenamiento de insumos y recursos.
            </p>
          </div>
        </main>

        {/* Cards Section */}
        <section className="px-6 py-10 bg-white">
          <h3 className="text-center text-2xl font-bold text-blue-700 mb-6">Áreas de Almacenamiento</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={card.link}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col h-full"
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-4 flex-grow flex items-center justify-center">
                  <p className="text-gray-700 text-center text-sm">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-5 px-6 text-center text-gray-700 text-sm border-t">
          <p className="font-bold text-blue-800 mb-2">ENCUÉNTRANOS EN:</p>
          <p>
            <span className="font-semibold">CELULAR:</span> 3123456789 <br />
            San Agustín - Huila.
          </p>
        </footer>
      </div>
    </DefaultLayout>
  );
};

export default InventoryLanding;
