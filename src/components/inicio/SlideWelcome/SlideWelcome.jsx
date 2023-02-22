import './SlideWelcome.scss'
import React from 'react';
import { motion } from "framer-motion";
import Typed from 'react-typed';

function SlideWelcome () {
    return(
        <div className="contenedor-principal-wel">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
                <h1>ESTUDIO JURIDICO DE ABOGADOS</h1>
                <p>Especialistas en Derecho 
                <br/> 
                    <Typed
                        strings={[
                            'Laboral y Previsional',
                            'Civil y Comercial',
                            'Penal',
                            'Familiar y Sucesiones',
                            'Informático y Empresarial']}
                        typeSpeed={60}
                        backSpeed={60}
                        loop
                    />
                </p>
            </motion.div>
        </div>
    )
};

export default SlideWelcome; 