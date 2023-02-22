import './IntroNos.scss';
import React from 'react';
import { motion } from "framer-motion";
import image from '../../../media/PrevSobreNosotros.jpg';


function IntroNos () {
    return(
        <div className='contenedor-principal-IntroNos'>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
                }}
            >
                ¿Quienes Somos?
            </motion.h2>
            <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
                }}
            >
                Profesionales y especialistas en derecho comprometidos con sus clientes
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
            <div className='descripcion-estudio'>
                <motion.div className="contenedor-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2>Estudio Mancini Abogados</h2>
                    <p>Somos una firma de abogados de la ciudad de Córdoba, dedicada 
                        a brindar a nuestros clientes soluciones legales y una asesoría 
                        integral en materia de  derecho laboral, civil, previsional, 
                        penal, empresarial, para la protección sus intereses económicos 
                        y sociales. Ofreciendo un servicio especializado y de calidad en 
                        constante capacitación y en permanente búsqueda de la satisfacción 
                        de sus necesidades legales, teniendo como objetivo final de optimizar 
                        el mayor beneficio para nuestros clientes, minimizando riesgos 
                        jurídicos, y resolviendo problemas complejos desde una mirada 
                        multidisciplinaria.
                        <br/>
                        <br/>
                        Nuestra misión es determinar correctamente los problemas, conflictos 
                        y consultas de nuestros clientes, brindando consejos serios y sanos 
                        a la problemática planteada, alineando las alternativas de solución 
                        con la defensa de sus intereses. Nuestro foco está orientado a encontrar 
                        y lograr la solución más eficiente a cada uno de los desafíos planteados, 
                        dentro de la ley y cumplir con las reglas impuestas por la moral, las 
                        buenas costumbres y las mejores prácticas.
                    </p>
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
        </div>
    )
}

export default IntroNos;