import './Equipo.scss';
import React from 'react';
import { motion } from "framer-motion";

import DiegoMancini from '../../../media/nosotros/DiegoMancini.jpg';
import JulianEspinosa from '../../../media/nosotros/JulianEspinosa.jpg';
import AntonellaCardozo from '../../../media/nosotros/AntonellaCardozo.jpg';
import MarianoGalvan from '../../../media/nosotros/MarianoGalvan.jpg';
import AgustinMarcora from '../../../media/nosotros/AgustinMarcora.jpeg';
import SergioMolina from '../../../media/nosotros/SergioMolina.jpg';


function Equipo () {
    return(
        <div className='contenedor-equipo'>
            <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
            opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
            }}
            >
                Nuestro Equipo
            </motion.h2>
            <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
            opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
            }}
            >
                Profesionales dedicados para ayudarte
            </motion.h3>
            <div className='contenedor-abogados'>
                {/* Tamaño imagenes 479x479 */}
                <div className='abogado'>
                    <motion.div className="contenedor-imagen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={DiegoMancini} alt="image"/>
                    </motion.div>
                    <div className="contenedor-text-descrip">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Diego Mancini
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Abogado
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Graduado de la Universidad Nacional de Córdoba.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Especialista en derecho civil, comercial y laboral.
                        </motion.p>
                        
                    </div>
                </div>
                <div className='abogado'>
                    <motion.div className="contenedor-imagen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={JulianEspinosa} alt="image"/>
                    </motion.div>
                    <div className="contenedor-text-descrip"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Julian Espinosa
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Abogado
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Graduado de la Universidad Nacional de Córdoba.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Especialista en derecho empresarial y contractual.
                        </motion.p>
                    </div>
                </div>
                <div className='abogado'>
                    <motion.div className="contenedor-imagen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={AntonellaCardozo} alt="image"/>
                    </motion.div>
                    <div className="contenedor-text-descrip"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Belen Cardozo
                        </motion.h2>
                        <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Abogada
                        </motion.h3>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Graduada de la Universidad Nacional de Córdoba.
                        </motion.p>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Especialista en derecho previsional, familia y sucesiones.
                        </motion.p>
                    </div>
                </div>
                <div className='abogado'>
                    <motion.div className="contenedor-imagen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={MarianoGalvan} alt="image"/>
                    </motion.div>
                    <div className="contenedor-text-descrip"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Mariano Galvan
                        </motion.h2>
                        <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Abogado
                        </motion.h3>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Graduado de la Universidad Nacional de Córdoba.
                        </motion.p>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Especialista en derecho penal.
                        </motion.p>
                    </div>
                </div>
                <div className='abogado'>
                    <motion.div className="contenedor-imagen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={AgustinMarcora} alt="image"/>
                    </motion.div>
                    <div className="contenedor-text-descrip"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Agustin Marcora
                        </motion.h2>
                        <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Abogado
                        </motion.h3>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Graduado de la Universidad Nacional de Córdoba.
                        </motion.p>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Especialista en derecho penal.
                        </motion.p>
                    </div>
                </div>
                <div className='abogado'>
                    <motion.div className="contenedor-imagen"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={SergioMolina} alt="image"/>
                    </motion.div>
                    <div className="contenedor-text-descrip"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Sergio Molina
                        </motion.h2>
                        <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Abogado
                        </motion.h3>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Graduado de la Universidad Nacional de Córdoba.
                        </motion.p>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Especialista en derecho informático.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipo;