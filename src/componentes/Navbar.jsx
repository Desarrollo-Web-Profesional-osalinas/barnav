import React, { useState } from 'react'
import { navbarLinks } from '../data/data';
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im"; 
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";
import { motion } from "motion/react"; 

const Navbar = () => {
    const [abierto, setAbierto] = useState(false);
    return (
        <>
            <nav>
                <div className='container flex justify-between font-bold items-center py-8'>
                    {
                        // Sección de Logo con Animación
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-2xl flex items-center gap-2 uppercase'
                        > 
                            <ImBooks />
                            <p>El sitio de BARG</p>
                            <p className='text-secondary'>Cursos</p>
                        </motion.div>
                    }
                    {
                        //Sección de Menú
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-7 text-gray-600">
                                {navbarLinks.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.url}
                                            className="inline-block py-1 px-3 hover:text-primary">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {
                        //Sección de Íconos
                        <div className="flex items-center gap-4">
                            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                                <CiSearch />
                            </button>
                            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                                <PiShoppingCartLight />
                            </button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block"
                            >
                                Ingresar
                            </motion.button>
                        </div>

                    }
                    {
                        //Sección de Móvil
                        <div className="md:hidden">
                            <MdMenu onClick={() => setAbierto(!abierto)}
                                className="text-4xl" />
                        </div>
                    }
                </div>
            </nav>

            {/* Menú Responsivo */}
            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
            <section className="bg-gray-50 py-12 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {/* Texto del Banner */}
                    <div className="flex flex-col justify-center gap-4 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold leading-tight"
                        >
                            Aprende con <span className="text-primary">BARG</span> los mejores <span className="text-secondary">Cursos</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-600 text-lg"
                        >
                            La mejor plataforma educativa para desarrollar tus habilidades con tecnología moderna.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex justify-center md:justify-start"
                        >
                            <button className="bg-primary text-white py-3 px-8 rounded-md font-bold hover:bg-secondary transition-colors duration-300 shadow-lg cursor-pointer">
                                Empezar Ahora
                            </button>
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            className='text-[10rem] md:text-[15rem] text-secondary opacity-90 drop-shadow-xl'
                        >
                            <ImBooks />
                        </motion.div>
                    </div>
                    
                </div>
            </section>

        </>
    )
}
export default Navbar