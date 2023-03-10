import './AreasDePractica.scss';
import React from "react";
import { motion } from "framer-motion";

import CivilComercial from "../../../media/especialidades/CivilComercial.jpg";
import Laboral from "../../../media/especialidades/Laboral.jpg";
import Penal from "../../../media/especialidades/Penal.jpg";
import FamiliaSucesiones from "../../../media/especialidades/FamiliaSucesiones.jpg";
import Informatico from "../../../media/especialidades/Informatico.jpg";
import Previsional from "../../../media/especialidades/Previsional.jpg";
import Empresarial from "../../../media/especialidades/Empresarial.jpg";
import Contractual from "../../../media/especialidades/Contractual.jpg";
import ConsultorioIntegral from "../../../media/especialidades/ConsultorioIntegral.jpg";


function AreasDePractica () {
    return(
      <div className="nos-diag-com-container">
        <div className="fila">
          {/* Derecho Civil y Comercial */}
          <div className="galeria">
            <div className="texto">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  order_approve
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Civil y Comercial
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                Experiencia en constituci??n de sociedades comerciales, 
                estatutos, resolvemos conflictos societarios y realizamos asesor??a 
                continua en materia legal.
                <br/>
                <br/>
                Modelos de contratos de alquiler, compraventa, arrendamientos, entre otros. 
                Tambi??n realizamos escrituraci??n de propiedades y asesoramiento en todo el 
                marco legal de operaciones inmobiliarias.
                <br/>
                <br/>
                Defensas de la posesi??n y tenencia, usucapi??n, prescripciones adquisitivas 
                en todo el territorio nacional, mediaciones, resoluci??n de conflictos en 
                etapa prejudicial, desalojos, estudio de t??tulos, registro de la propiedad 
                inmueble, registro nacional del automotor.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={CivilComercial}
                />
              </div>
            </motion.div>
          </div>

          {/* Derecho Laboral */}

          <div className="galeria">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={Laboral}
                />
              </div>
            </motion.div>
            <div className="texto-blanco ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  balance
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Laboral
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
              En materia laboral contamos con la idoneidad y experiencia para 
              asesorar a trabajadores que han sufrido despidos sin justa causa, 
              despido indirecto, despido discriminatorio o han sido v??ctimas de 
              violencia laboral, mobbing o acoso laboral. Te representamos en 
              litigios por enfermedades profesionales o accidentes laborales.
              <br/>
              <br/>
              Nuestros abogados laborales te orientan y realizan cartas documento, 
              modelo de telegrama laboral o notificaciones. Te representamos en 
              instancias judiciales y extrajudiciales, realizamos negociaciones y 
              confecci??n de demandas laborales.
              </motion.p>
            </div>
          </div>

          {/* Derecho Penal */}

          <div className="galeria">
            <div className=" texto ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  gavel
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Penal
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
              Realizamos la representaci??n de personas que se encuentran investigadas 
              por delitos contra personas, orden p??blico, libertad individual. 
              Acompa??amiento y asesoramiento durante el proceso judicial. Nuestros 
              abogados penalistas cuentan con experiencia en materia recursiva, 
              revisamos sentencias, presentaci??n de recursos en Casaci??n, Extraordinario 
              y Corte Suprema. 
              <br/>
              <br/>
              Representamos  a v??ctimas de delitos defendiendo sus derechos. 
              Trabajamos en soluci??n de conflictos, da??os y perjuicios, accidentes 
              de transito, mala praxis m??dica, estafas, defensa propia o leg??tima 
              defensa.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={Penal}
                />
              </div>
            </motion.div>
          </div>

          {/* Familia y Sucesiones */}

          <div className="galeria">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={FamiliaSucesiones}
                />
              </div>
            </motion.div>
            <div className=" texto-blanco ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  family_restroom
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Familia y Sucesiones
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
              Realizamos asesor??a en conflictos familiares. Divorcio Express 
              online, acuerdos, r??gimen de visitas, reclamo por incumplimiento 
              de cuota alimentaria, embargos de sueldo,  violencia familiar.
              <br/>
              <br/>
              Ofrecemos gesti??n integral en procesos de sucesi??n de bienes, 
              agilidad en declaratorias de herederos. Anticipaci??n mediante 
              planificaci??n sucesoria, testamentos y fideicomisos.
              </motion.p>
            </div>
          </div>

          {/* Derecho Inform??tico */}

          <div className="galeria">
            <div className=" texto ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  devices
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Inform??tico
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
              Con el incremento del comercio electr??nico y el avance del ??mbito 
              digital el ciberdelito ha aumentado un 70% respecto al a??o anterior. 
              Robo de datos de tarjeta de cr??dito o robo de cuentas bancarias. 
              Si sos v??ctima de estas estafas no dudes en consultarnos para actuar 
              r??pidamente.
              <br/>
              <br/>
              Tambi??n analizamos contratos inform??ticos, contratos por ecommerce, 
              redes sociales y publicidad online.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={Informatico}
                />
              </div>
            </motion.div>
          </div>

          {/* Derecho Previsional */}

          <div className="galeria">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={Previsional}
                />
              </div>
            </motion.div>
            <div className=" texto-blanco ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  assist_walker
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Previsional
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
              El estudio te brinda acompa??amiento para realizar tu tr??mite de 
              jubilaci??n ante Anses y Caja de Jubilaciones. Jubilaci??n de ama 
              de casa. Jubilaci??n con moratoria. Tramitamos pensi??n por 
              fallecimiento y litigamos en juicios de reajuste.
              <br/>
              <br/>
              Realizamos reclamos por Renta Vitalicia, Jubilaciones Ordinarias, 
              Jubilaciones por Invalidez/Minusval??a, tramites y turnos en el Anses, 
              Aportes y Moratorias.
              </motion.p>
            </div>
          </div>

          {/* Derecho Empresarial */}

          <div className="galeria">
            <div className=" texto ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  monitoring
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Empresarial
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
              An??lisis legal de situaciones impositivas. Impuestos municipales, 
              provinciales y nacionales. Confeccionamos declaraciones de renta y 
              patrimonio. Realizamos gesti??n de cobranza de tu cartera de clientes. 
              Revisi??n y redacci??n de contrato de alquiler comercial, laboral y de 
              confidencialidad.
              <br/>
              <br/>
              La normativa tributaria es de vital importancia en el ??mbito empresarial 
              y finanzas. Nosotros te asistimos para tu tranquilidad y minimizamos los 
              costos y riesgos de tu actividad.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={Empresarial}
                />
              </div>
            </motion.div>
          </div>

          {/* Derecho Contractual */}

          <div className="galeria">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" imagen"
            >
              <div className="imagen-zoom">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 3, ease: [1, 1, 1, 1] },
                  }}
                  viewport={{ once: true }}
                  src={Contractual}
                />
              </div>
            </motion.div>
            <div className=" texto-blanco ">
              <motion.label
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                <span class="material-symbols-outlined">
                  currency_exchange
                </span>
              </motion.label>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Derecho Contractual
              </motion.h3>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
              Consta de normas que regulan c??mo exigir el cumplimiento de un contrato 
              conforme a la definici??n dada en el presente texto.
              <br/>
              <br/>
              Nos encargamos de confecci??n de contratos nacionales como as?? tambi??n en otros Estados. 
              Especializados en Leasing, Fideicomisos, Contratos en Bolsa, entre otros 
              que posibilitar??n plasmar las necesidades de ambas partes de la manera m??s 
              profesional y seria.
              </motion.p>
            </div>
          </div>

          {/* Consultorio Integral */}

          <div className="galeria">
          <div className=" texto ">
            <motion.label
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              <span class="material-symbols-outlined">
                account_balance
              </span>
            </motion.label>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Consultorio Integral
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
            Estudios de campo, relevamientos, estudio de mercado. El estudio 
            jur??dico Mancini Abogados cuenta con la m??s amplia diversidad de 
            profesionales puesta a su servicio, soci??logos, arquitectos, contadores, 
            escribanos, ellos pendientes del servicio que usted requiere para lograr 
            su objetivo. 
            <br/>
            <br/>
            As?? mismo se realizan asesoramientos jur??dicos completos con entrega final 
            de trabajo, tablas, posibilidades de resoluci??n, variables econ??micas a 
            corto y largo plazo, videoconferencias y exposiciones en las salas de 
            nuestras oficinas.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className=" imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={ConsultorioIntegral}
              />
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    )
}

export default AreasDePractica;