import './Colaboradores.scss';
import React from 'react';
import { motion } from "framer-motion";


function Colaboradores () {
    return(
        <div className='contenedor-principal-colaboradores'>
            <motion.div className='contenedor-secundario'
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2>Contamos con amplia gama de colaboradores</h2>
                <p>Nuestro Estudio cuenta con colaboradores y colegas de 
                    distintos rubros en varias partes del mundo, que permiten 
                    una rápida gestión en las soluciones de su empresa. Un 
                    equipo de abogados con un prestigio y trayectoria de excelencia.
                </p>
                <a href="/nosotros">
                    <motion.button whileHover={{ scale: 1.1 }}>Conocenos mejor!</motion.button>
                </a>
            </motion.div>
        </div>
    )
}

export default Colaboradores;