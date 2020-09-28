import React from 'react';
import styled from '@emotion/styled';
import {firstletter} from '../helper';
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
 padding:1rem;
 text-align:center;
 background-color: #904e95;
 color:white;
 margin-top: 1rem;
 border-radius:15px;
 padding-bottom:2rem;
`

const Lista = styled.li`
    float:left;
    margin-left:3rem;
    
`
const Titulo = styled.h2`
    align-content:center;
    text-align:center;
`

const Resumen = ({datos}) => {

    //extraer datos 
    const  {marca,year,plan} = datos;
    //condicion para mostrar el componente
    if(marca.trim() ==='' || year.trim()===''|| plan.trim() ===''){
        return null;
    }
    return (
        <>
        <ContenedorResumen>
            <Titulo>Resumen De Cotizacion</Titulo>
            <ul>
                <Lista>Marca :{firstletter(marca)} </Lista>
                <Lista>Plan :{ firstletter(plan)} </Lista>
                <Lista>Año :{year} </Lista>
            </ul>
        </ContenedorResumen>
        </>
      );
}

Resumen.propTypes = {
    datos:PropTypes.object.isRequired
   
}
 
export default Resumen;