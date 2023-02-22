import React from "react";
import SlideWelcomeNos from '../components/nosotros/SlideWelcomeNos/SlideWelcomeNos';
import IntroNos from "../components/nosotros/IntroNos/IntroNos";
import Aptitudes from "../components/nosotros/Aptitudes/Aptitudes";
import Equipo from "../components/nosotros/Equipo/Equipo";
import PrevContacto from '../components/inicio/PrevContacto/PrevContacto';


export default function Nosotros() {
    return(
        <>
            <SlideWelcomeNos/>
            <IntroNos/>
            <Aptitudes/>
            <Equipo/>
            <PrevContacto/>
        </>
        
    )
}