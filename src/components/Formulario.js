import React,{useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear,calcularMarca,calcularPlan} from '../helper';
import PropTypes from 'prop-types'

const Campo = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
`;

const LabelForm = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display:block;
    width:100%;
    padding:5px;
    border:1px solid black;
    --webkit-appearance:none;
`

const InputRadio = styled.input`
    margin :0 1rem;
`

const ButtonForm = styled.button`
    background-color: #26c6da;
    font-size:16px;
    width:100%;
    padding:0.5rem;
    color:white;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    margin-top:1rem;
    border-radius:15px;
    transition: background-color 1s ease;

    &:hover {
        cursor:pointer;
        background-color:#904e95;
    }
`

const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    border-radius:15px;
    

`

const Formulario = ({guardarResumen,guardarCargar}) => {

    //state Formulario
    const [datos,guardarDatos ] = useState({
        marca:'',
        year : '',
        plan:''
    });
    //state Error
    const [error,guardarError] = useState(false);

    //extraer los valores del state
    const  {marca,year,plan} = datos;

    //guardar Datos formulario
    const ObtenerInformacion =(e)=>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    //enviar datos 
    const CotizarSeguro = e =>{
        e.preventDefault();
        //validacion 
        if(marca.trim() ==='' || year.trim()===''|| plan.trim() ===''){
            guardarError(true);
            return;
        }

        guardarError(false);
        //variable base de seguro
        let resultado = 2000;
      
        //obtener la diferencias de años 
        let diferencia = obtenerDiferenciaYear(year);
        
        //por cada año hay que restar el 3%
        resultado -=((diferencia * 3) * resultado) /100;
       
        //calcular incremento por marca
        resultado = calcularMarca(marca) * resultado;
       
        //calcular plan
        const incrementoPlan = calcularPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        //activar spinner
        guardarCargar(true);
        //timeout de spinner
        setTimeout(()=>{ 
            //eliminar spinner
            guardarCargar(false);
             //Pasar informacion a los otros componentes
                guardarResumen({
                    cotizacion: Number(resultado) ,
                    datos
                });
           
        },3000 )

       

    }

    return ( 
            <form
                onSubmit={CotizarSeguro}
            >
               

                <Campo>
                    <LabelForm>Marca :</LabelForm>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={ObtenerInformacion}
                    >
                        <option value="">--Selecione--</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                </Campo>

                <Campo>
                    <LabelForm>Año :</LabelForm>
                    <Select
                         name="year"
                         value={year}
                         onChange={ObtenerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>

                <Campo>
                    <LabelForm>Plan :</LabelForm>
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan ==="basico"}
                        onChange={ObtenerInformacion}
                    /> Basico
                     <InputRadio
                        type="radio"
                        name="plan"
                        value="completo"
                        checked={plan === "completo"}
                        onChange={ObtenerInformacion}
                    /> Completo
                </Campo>

                {error ? <Error>Todos los campos son obligatorios</Error> : null  }

                <ButtonForm type="submit">Cotizar</ButtonForm>

            </form>


     );
}
 
Formulario.propTypes = {
    guardarCargar:PropTypes.func.isRequired,
    guardarResumen:PropTypes.func.isRequired
}

export default Formulario;