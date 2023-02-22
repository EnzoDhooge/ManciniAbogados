import './SlideWelcomeEsp.scss';
import React from 'react';
import { motion } from "framer-motion";

function SlideWelcomeEsp () {
    return(

        <div className="contenedor-principal-WelEsp">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
                <h2>Areas de Práctica</h2>
            </motion.div>
        </div>
    )
}

export default SlideWelcomeEsp;