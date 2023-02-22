import './PrevSobreNosotros.scss'
import React from 'react';
import { motion } from "framer-motion";
import image from '../../../media/PrevSobreNosotros.jpg'


function PrevSobreNosotros () {
    return(
        <div className="contenedor-principal-PSN">
            <motion.div className="contenedor-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h2>Estudio Mancini Abogados es el lugar correcto</h2>
                <p>La firma Mancini Abogados es un estudio jurídico integral dedicado 
                    al asesoramiento en derecho civil, comercial, previsional, 
                    derecho empresarial, informático, derecho laboral, derecho penal, 
                    derecho de familia y sucesiones. Con el objetivo claro de adoptar 
                    las medidas necesarias y precisas para la solución de la problemática 
                    que está atravesando el cliente.
                </p>
                <div className="contenedor-items">
                    <div className='item'>
                        <span class="material-symbols-outlined">
                            balance
                        </span>
                        <h4>Profesionalismo</h4>
                        <p>Nuestro equipo de abogados cuentan con más de 20 años de experiencia en las distintas ramas del derecho.</p>
                    </div>
                    <div className='item'>
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                        <h4>Eficiencia</h4>
                        <p>Le ahorramos al cliente tiempo y coste dado que contamos con la última tecnología para gestionar documentos de forma virtual.</p>
                    </div>
                </div>
                <a href="/nosotros">
                    <motion.button whileHover={{ scale: 1.1 }}>Conocenos!</motion.button>
                </a>
            </motion.div>
            <motion.div className="contenedor-imagen"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img src={image} alt="image"/>
            </motion.div>
        </div>
    )
}

export default PrevSobreNosotros;