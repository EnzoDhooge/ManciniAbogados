import './Aptitudes.scss';
import React from 'react';
import { motion } from "framer-motion";

function Aptitudes () {
    return(
        <div className='contenedor-background'>
            <motion.div className='contenedor-principal-aptitudes'
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className='aptitud'>
                    <span class="material-symbols-outlined">
                        school
                    </span>
                    <h3>Altamente capacitados</h3>
                    <p>Contamos con permanente capacitación en jurisprudencia y 
                        novedades en materia legislativa.
                    </p>
                </div>
                <div className='aptitud'>
                    <span class="material-symbols-outlined">
                        verified_user
                    </span>
                    <h3>Más de 20 años de experiencia</h3>
                    <p>Nuestra trayectoria profesional nos permite dar un amplio 
                        asesoramiento para brindar soluciones precisas y concretas.
                    </p>
                </div>
                <div className='aptitud'>
                    <span class="material-symbols-outlined">
                        acute
                    </span>
                    <h3>Excelencia</h3>
                    <p>Ofrecer el mejor servicio es nuestro objetivo, por ello nos 
                        constatamos de brindarte respuestas con agilidad y eficiencia.
                    </p>
                </div>
            </motion.div>
        </div>
        
    )
}

export default Aptitudes;