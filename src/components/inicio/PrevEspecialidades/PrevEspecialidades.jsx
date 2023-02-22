import './PrevEspecialidades.scss'
import React from 'react';
import { motion } from "framer-motion";

function PrevEspecialidades () {
    return(
        <div className="contenedor-principal-PE">
            <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
            opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
            }}
            >
                Areas de Práctica
            </motion.h2>
            <motion.p className='description'
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
            opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
            }}>
                Experiencia profesional en todas las ramas del derecho
            </motion.p>
            <div className="contenedor-especialidades">
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            order_approve
                        </span>
                        <h3>Derecho Civil y Comercial</h3>
                        <p>Asuntos Patrimoniales. Sucesiones, Daños y Perjuicios. Prescripciones Adquisitivas en todo el territorio nacional.</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            balance
                        </span>
                        <h3>Derecho Laboral</h3>
                        <p>Asesoramiento, conciliaciones y juicios laborales, tanto sea por la parte empleada como por la empleadora.</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            gavel
                        </span>
                        <h3>Derecho Penal</h3>
                        <p>Defensas y querellas penales. Confección y radicales de denuncias. Excarcelaciones. Rebeldías. Eximición de prisión.</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            family_restroom
                        </span>
                        <h3>Familia y Sucesiones</h3>
                        <p>Declaratoria de herederos. Divorcios.  Actualizacion de cuotas alimentarias y de manuntención. Regímenes de comunicacion y visitas.</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            devices
                        </span>
                        <h3>Derecho Informático</h3>
                        <p>Protección de marca, Asesoramiento acerca de establecimientos Ecommerce, Ciberdelito.</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            assist_walker
                        </span>
                        <h3>Derecho Previsional</h3>
                        <p>Jubilaciones Ordinarias, Invalidez, Minusvalía, Aportes, Moratorias, Pencion por Fallecimiento, Juicio de reajuste</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            monitoring
                        </span>
                        <h3>Derecho Empresarial</h3>
                        <p>Equipo capacitado de abogados, sociólogos, consultores le permitirá tener una amplia gama de soluciones institucionales y empresariales</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            currency_exchange
                        </span>
                        <h3>Derecho Contractual</h3>
                        <p>Confección de contratos nacionales como así también en otros Estados. Especializados en Leasing, Fideicomisos, Contratos en Bolsa, entre otros.</p>
                    </div>
                </motion.a>
                <motion.a href='/especialidades'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 },
                }}
                >
                    <div className="especialidad">
                        <span class="material-symbols-outlined">
                            account_balance
                        </span>
                        <h3>Consultorio Integral</h3>
                        <p>Estudios de campo, relevamientos, estudio de mercado. El Estudio Mancini Abogados cuenta con la más amplia diversidad.</p>
                    </div>
                </motion.a>
            </div>
            <a href="/especialidades">
                <motion.button whileHover={{ scale: 1.1 }}>Ver más información</motion.button>
            </a>
        </div>
    )
}

export default PrevEspecialidades;