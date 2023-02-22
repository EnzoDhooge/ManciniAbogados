import './IntroEsp.scss';
import React from 'react';
import { motion } from "framer-motion";


function IntroEsp () {
    return(
        <div className='contenedor-principal-IntroEsp'>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
                }}
            >
                Nuestras Especialidades
            </motion.h2>
            <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
                }}
            >
                Experiencia profesional en todas las ramas del derecho
            </motion.h3>
            <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 },
                }}
            >
                Contamos con abogados dedicados y especializados en las distintas ramas 
                del derecho a los fines de poder cumplir con un asesoramiento integral.
                <br/>
                La trayectoria profesional y académica de sus socios permite brindar un amplio asesoramiento legal a clientes locales y extranjeros en las diferentes áreas del derecho.
            </motion.p>
        </div>
    )
}

export default IntroEsp;