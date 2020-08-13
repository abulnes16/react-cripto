import React, { useState, useEffect } from 'react';
import imagen from './img/cryptomonedas.png';
import Formulario from './components/Formulario';
import { cotizarCripto } from './services/Cripto';
import Spinner from './components/Spinner';
import Cotizacion from './components/Cotizacion';

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [cripto, guardarCripto] = useState('');
  const [cargando, guardarCargando] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {

    //Validacion de ejecucion
    if (moneda === '' || cripto === '') { return; }
    cotizarCripto(moneda, cripto)
      .then(resultado => {

        //Mostrar spinner
        guardarCargando(true)
        setTimeout(() => {

          //Ocultar spinner y mostrar resultado
          guardarCargando(false);
          guardarResultado(resultado.data.DISPLAY[cripto][moneda]);
        }, 3000);
      });
  }, [cripto, moneda]);

  //Mostrar spinner o resultado 
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado}/>;

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="Imagen criptomonedas" />
        </div>
        <div className="one-half column">
          <h1>Cotiza criptomonedas al instante</h1>
          <Formulario
            guardarMoneda={guardarMoneda}
            guardarCripto={guardarCripto}
          />
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
