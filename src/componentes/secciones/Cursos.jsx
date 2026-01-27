const Cursos = () => {
  return (
  <section id="#cursos" className="py-20 bg-white">
  <div className="container mx-auto px-4">
  <h2 className="text-3xl font-bold mb-12 text-center text-primary">Nuestros Cursos</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="p-8 shadow-lg rounded-xl bg-orange-50 hover:scale-105 transition duration-300">
    <h3 className="text-xl font-bold mb-2">Curso de React</h3>
    <p className="text-gray-600">Domina Hooks y Componentes.</p>
  </div>
  <div className="p-8 shadow-lg rounded-xl bg-orange-50 hover:scale-105 transition duration-300">
    <h3 className="text-xl font-bold mb-2">Curso de Tailwind</h3>
    <p className="text-gray-600">Estilos rápidos y modernos.</p>
  </div>
  <div className="p-8 shadow-lg rounded-xl bg-orange-50 hover:scale-105 transition duration-300">
    <h3 className="text-xl font-bold mb-2">Curso de Framer Motion</h3>
    <p className="text-gray-600">Animaciones profesionales.</p>
  </div>
  </div>
  </div>
  </section>
  )
 }
 export default Cursos