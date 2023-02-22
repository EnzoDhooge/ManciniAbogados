import './PrevContacto.scss';
import { motion } from "framer-motion";

function PrevContacto () {
    return(
        <div className='contenedor-principal-PrevCont'>
            <motion.div className='contenedor-secundario-PrevCont'
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2>Contacto</h2>
                <h3>¿Tiene preguntas? Tenemos respuestas</h3>
                <p>Si se encuentra interesado o quiere realizarnos una consulta, no dude en comunicarse</p>
                <a href="/contacto">
                    <motion.button whileHover={{ scale: 1.1 }}>Tomar contacto</motion.button>
                </a>
            </motion.div>
        </div>
    )
}

export default PrevContacto;