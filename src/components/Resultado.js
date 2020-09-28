import React from 'react';
import styled from '@emotion/styled'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

const Mensaje = styled.p`
    background-color:#904e95;
    margin-top:1rem;
    padding:1rem;
    text-align:center;
    color:white;
    border-radius:15px;
    
`

const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion ===0)?<Mensaje>Selecciona marca , año y plan para realizar cotizacion!! </Mensaje>:
        ( <TransitionGroup
            component="span"
            className="resultado"
            >
            <CSSTransition
                className="resultado"
                key={cotizacion}
                timeout={{enter:500,exit:500}}
            >
                <Mensaje>Total A Pagar $ :<span>{cotizacion}</span> </Mensaje>
            </CSSTransition>
        </TransitionGroup>)
     );
}
Resultado.propTypes = {
    cotizacion:PropTypes.number.isRequired
   
}


export default Resultado;