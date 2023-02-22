import React from "react";
import SlideWelcomeEsp from '../components/especialidades/SlideWelcomeEsp/SlideWelcomeEsp';
import IntroEsp from '../components/especialidades/IntroEsp/IntroEsp';
import AreasDePractica from '../components/especialidades/AreasDePractica/AreasDePractica';
import PrevContacto from '../components/inicio/PrevContacto/PrevContacto';


export default function Especialidades() {
    return(
        <>
            <SlideWelcomeEsp/>
            <IntroEsp/>
            <AreasDePractica/>
            <PrevContacto/>
        </>
        
    )
}