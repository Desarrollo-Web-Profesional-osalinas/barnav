import React from 'react';
import { motion } from "motion/react";
import { ImBooks } from "react-icons/im";

const Home = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-24 min-h-[90vh] flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Texto del Banner */}
        <div className="flex flex-col justify-center gap-4 text-center md:text-left">
            <motion.h1
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
            >
                Aprende con <span className="text-primary">BARG</span> los mejores <span className="text-secondary">Cursos</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-lg"
            >
                La mejor plataforma educativa para desarrollar tus habilidades con tecnología moderna.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center md:justify-start"
            >
                <button className="bg-primary text-white py-3 px-8 rounded-md font-bold hover:bg-secondary transition-colors duration-300 shadow-lg cursor-pointer">
                    Empezar Ahora
                </button>
            </motion.div>
        </div>

        {/* Imagen del Banner */}
        <div className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8 }}
                className='text-[10rem] md:text-[15rem] text-secondary opacity-90 drop-shadow-xl'
            >
                <ImBooks />
            </motion.div>
        </div>
        
      </div>
    </section>
  );
};
export default Home;