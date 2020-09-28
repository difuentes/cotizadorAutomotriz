import React,{useState} from 'react';
import Header from '../src/components/Header';
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width:700px;
  margin: 0 auto;
  margin-top:2rem; 
`
const ContenedorFormulario = styled.div`
  background-color:white;
  padding:3rem;
`

function App() {
  //state
  const [resumen,guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year : '',
      plan:''
    }
  });
  //state spinner 
  const [cargando,guardarCargar] = useState(false);

  //extraer Datos
  const {datos ,cotizacion} = resumen;

  return (
    <Contenedor>
        <Header
          tituto="cotizador de Seguros"
        />
        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            guardarCargar={guardarCargar}
          />
          {cargando ? <Spinner/> :null }
         <Resumen
           datos={datos}
         />
         {!cargando ?(<Resultado cotizacion={cotizacion}/>) :null}
        
       
        
        </ContenedorFormulario>
    </Contenedor>
   
  );
}

export default App;
