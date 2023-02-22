import './SlideWelcomeNos.scss'
import React from 'react';
import { motion } from "framer-motion";

function SlideWelcomeNos () {
    return(
        <div className="contenedor-principal-WelNos">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
                <h2>Sobre Nosotros</h2>
            </motion.div>
        </div>
    )
}

export default SlideWelcomeNos;