import './PorqueElegirnos.scss';
import React from 'react';
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function PorqueElegirnos () {
    return(
        <div className='contenedor-principal-background'>
            <div className="contenedor-principal-razones">
                <div className="text-razones">
                    <motion.h4
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                        opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 },
                        }}
                    >
                        ¿Por qué elegirnos?
                    </motion.h4>
                    <motion.h5
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                        opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 },
                        }}
                    ><span>1</span> Seriedad y Profesionalismo</motion.h5>
                    <motion.p
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                        opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 },
                        }}
                    >Nuestra trayectoria avala el profesionalismo con el que llevamos a cabo el servicio de asesoría legal, nos caracteriza la seriedad en la relacion con nuestros clientes.</motion.p>
                    <motion.h5
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                        opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 },
                        }}
                    ><span>2</span> Asesoramiento Integral</motion.h5>
                    <motion.p
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                        opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 },
                        }}
                    >Te asesoramos en todas las ramas del Derecho respondiendo a todas tus consultas con una mirada global e integral y de manera ágil.</motion.p>
                    <motion.h5
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                        opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.7 },
                        }}
                    ><span>3</span> Tenacidad y Transparencia</motion.h5>
                    <motion.p
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                        opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.8 },
                        }}
                    >Con permanente contacto y de manera personalizada buscamos el logro del mejor resultado estando a la altura de la confianza depositada.</motion.p>
                </div>
                <motion.div className="contador-razones" 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* <CountUp delay={0} end={1000} enableScrollSpy="true" duration={2}/>  */}

                    <div className='contenedor-contadores'>
                        <p className="numeros"><span>%</span>
                            <CountUp end={100} duration={2}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                            </CountUp>
                        </p>
                        <p className="texto">De Respuesta al Cliente</p>
                    </div>
                    <div className='contenedor-contadores'>
                        <p className="numeros"><span>+</span>
                            <CountUp end={800} duration={2}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                            </CountUp>
                        </p>
                        <p className="texto">Clientes Satisfechos por Año</p>
                    </div>
                    <div className='contenedor-contadores'>
                        <p className="numeros"><span>+</span>
                            <CountUp end={20} duration={2}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                            </CountUp>
                        </p>
                        <p className="texto">Años De Trayectoria</p>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    )
}

export default PorqueElegirnos;