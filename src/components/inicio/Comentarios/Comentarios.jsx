import './Comentarios.scss';
import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

import img1 from '../../../media/Slider1.jpg';
import img2 from '../../../media/Slider2.jpg';
import img3 from '../../../media/Slider3.jpg';


function Comentarios () {

    const slideshow = useRef(null);

    const siguiente = () => {

        // Comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){

            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

            // Obtenemos el tamaño del slide
            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            
            const transicion = () => {
                // Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }
            
            // Eventlistener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    
    const anterior = () => {

        // Comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){

            // Obtenemos el ultimo elemento del slideshow
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '1000ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        setInterval(() => {
            siguiente();
        }, 18000);
    }, []);

    return(
        <motion.div className='contenedor-principal-comentarios'
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
            opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 },
            }}
        >
            <h2>La excelencia y agilidad nos distinguen</h2>
            <p>Veamos que es lo que opinan nuestros clientes</p>
            <ContenedorPrincipal>
                <ContenedorSlideshow ref={slideshow}>
                    <Slide>
                            <div className='contenedor-imagen'>
                                <img src={img1} loading="lazy" alt="Img1"/>
                            </div>
                            <div className='contenedor-texto'>
                                <span class="material-symbols-outlined">
                                    format_quote
                                </span>
                                <p>Hace más de 5 años que confío todos mis temas 
                                    legales al estudio Mancini Abogados, tanto en mi empresa 
                                    como en mi familia ya que tenemos la tranquilidad 
                                    de saber que contamos con un equipo de profesionales 
                                    de primera línea. 
                                </p>
                                <div className='perfil'>
                                    <h5>Graciela Balbi</h5>
                                    <p>Hace 3 meses</p>
                                </div>
                            </div>
                    </Slide>
                    <Slide>
                            <div className='contenedor-imagen'>
                                <img src={img2} loading="lazy" alt="Img2"/>
                            </div>
                            <div className='contenedor-texto'>
                                <span class="material-symbols-outlined">
                                    format_quote
                                </span>
                                <p>Muy buena atención y profesionales en el trabajo que 
                                    realizan, evitando costos y optimizando los tiempos 
                                    durante todo el proceso que me representaron. Han 
                                    superado ampliamente mis expectativas, los he recomendado 
                                    a todos mis conocidos.
                                </p>
                                <div className='perfil'>
                                    <h5>Fabricio Mendez</h5>
                                    <p>Hace 5 meses</p>
                                </div>
                            </div>
                    </Slide>
                    <Slide>
                        <div className='contenedor-imagen'>
                            <img src={img3} loading="lazy" alt="Img3"/>
                        </div>
                        <div className='contenedor-texto'>
                            <span class="material-symbols-outlined">
                                format_quote
                            </span>
                            <p>Como cliente me encuentro muy satisfecho con el trabajo 
                                que realizan en el estudio jurídico Mancini Abogados debido 
                                al gran profesionalismo y transparencia que manejan a la hora 
                                de abordar la situación para la solución del inconveniente en cuestión.
                            </p>
                            <div className='perfil'>
                                <h5>Nicolás Garay</h5>
                                <p>Hace 11 meses</p>
                            </div>
                        </div>
                    </Slide>
                </ContenedorSlideshow>
                <Controles>
                    <Boton onClick={anterior}>
                        <motion.span class="material-symbols-outlined left"
                            whileHover={{ scale: 1.1 }}
                            >
                                arrow_circle_left
                        </motion.span>
                    </Boton>
                    <Boton derecho onClick={siguiente}>
                        <motion.span class="material-symbols-outlined right"
                            whileHover={{ scale: 1.1 }}
                            >
                                arrow_circle_right
                        </motion.span>
                    </Boton>
                </Controles>
            </ContenedorPrincipal>
        </motion.div>
    )
}

export default Comentarios;

const ContenedorPrincipal = styled.div`
    width: 70%;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    @media(max-width: 1000px) {
        width: 85%;
    }
    @media(max-width: 800px) {
        width: 100%;
    }
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    background-color: #F2BC94;
    min-width: 100%;
    padding: 30px 70px;
    position: relative;
    // overflow: hidden;
    transition: .3s ease all;
    z-index: 1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .contenedor-imagen{
        width: 35%;
        img{
            width: 100%;
            vertical-align: top;
            border-radius: 5px;
        }
    }
    .contenedor-texto{
        width: 60%;
        span{
            color: #fff;
            font-size: 4rem;
            position: relative;
            background: none;
            &:hover{
                background: none;
            }
        }
        p{
            color: #fff;
            font-size: 1.3rem;
        }
        .perfil{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-left: 15px;
            h5{
                color: #722620;
                font-size: 1.1rem;
                font-weight: bold;
                padding: 0;
                margin: 0;
            }
            p{
                color: #474B4E;
                font-size: 0.9rem;
                padding: 0;
                margin: 0;
            }
        }
    }

    @media(max-width: 1400px) {
        .contenedor-texto{
            width: 60%;
            span{
                font-size: 3rem;
            }
            p{
                font-size: 1.1rem;
            }
            .perfil{
                h5{ font-size: 0.9rem; }
                p{ font-size: 0.8rem; }
            }
        }
    }

    @media(max-width: 1000px) {
        padding: 20px 70px;
        .contenedor-texto{
            span{
                font-size: 2.3rem;
            }
            p{
                font-size: 1rem;
                text-align: justify;
                margin-bottom: 10px;
            }
            .perfil{
                margin-left: 0px;
                h5{ font-size: 0.8rem; }
                p{ font-size: 0.7rem; }
            }
        }
    }

    @media(max-width: 800px) {
        padding: 40px 70px;
        flex-direction: column;
        border-radius: 0;
        .contenedor-imagen{
            width: 50%;
            height: 300px;
            overflow: hidden;
        }
        .contenedor-texto{
            width: 90%;
            span{
                font-size: 2.2rem;
                margin-top: 30px;
            }
            p{
                font-size: 1rem;
            }
            .perfil{
                h5{ font-size: 0.7rem; }
                p{ font-size: 0.6rem; }
            }
        }
    }

    @media(max-width: 600px) {
        .contenedor-imagen{
            width: 80%;
        }
        .contenedor-texto{
            width: 100%;
    }

    @media(max-width: 450px) {
        padding: 30px 20px;
        .contenedor-imagen{
            width: 90%;
        }
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'}
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
`;