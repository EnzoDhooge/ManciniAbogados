import React from "react";
import SlideWelcome from '../components/inicio/SlideWelcome/SlideWelcome';
import PrevSobreNosotros from '../components/inicio/PrevSobreNosotros/PrevSobreNosotros';
import PorqueElegirnos from '../components/inicio/PorqueElegirnos/PorqueElegirnos';
import PrevEspecialidades from '../components/inicio/PrevEspecialidades/PrevEspecialidades';
import Colaboradores from '../components/inicio/Colaboradores/Colaboradores';
import Comentarios from '../components/inicio/Comentarios/Comentarios';
import PrevContacto from '../components/inicio/PrevContacto/PrevContacto';


export default function Inicio() {
    return(
        <>
            <SlideWelcome/>
            <PrevSobreNosotros/>
            <PorqueElegirnos/>
            <PrevEspecialidades/>
            <Colaboradores/>
            <Comentarios/>
            <PrevContacto/>
        </>
        
    )
}