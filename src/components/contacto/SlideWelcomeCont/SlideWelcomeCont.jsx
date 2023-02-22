import './SlideWelcomeCont.scss'
import React from 'react';
import { motion } from "framer-motion";

function SlideWelcomeCont () {
    return(
        <div className="contenedor-principal-WelCont">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
                <h2>Contacto</h2>
            </motion.div>
        </div>
    )
}

export default SlideWelcomeCont;