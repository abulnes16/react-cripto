import React, { useEffect, useState } from 'react';
import { consultarAPI } from '../services/Cripto';
import OpCripto from './OpCripto';
import Error from './Error';
import useCoin from '../hooks/useCoin'
const Formulario = ({guardarMoneda, guardarCripto}) => {


    const [coin, setCoin, SelectCoin] = useCoin();
    const [criptomonedas, guardarCriptomonedas] = useState([]);
    const [monedaCotizar, guardarMonedaCotizar] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError] = useState(false);

    useEffect(() => {
        consultarAPI()
            .then(respuesta => { guardarCriptomonedas(respuesta.data.Data) });
    }, []);

    const cotizarMoneda = e => {
        e.preventDefault();
        //Validar si los campos estan vacios
        if (monedaCotizar === '' || criptoCotizar === ''){
            guardarError(true);
            return;
        }

        //Pasamos el valor al state de APP
        guardarMoneda(monedaCotizar);
        guardarCripto(criptoCotizar); 
        guardarError(false);
    }
     const componente = error ? <Error mensaje="Ambos campos son obligatorios"/>: null;
    
    return (
        <form onSubmit={cotizarMoneda}>
            {componente}
            <div className="row">

            <SelectCoin/>
                {/* <label>Elige tu moneda</label>
                <select
                    className="u-full-width"
                    onChange={e => guardarMonedaCotizar(e.target.value)}
                >
                    <option value="">--Elige tu Moneda--</option>
                    <option value="USD">Dola estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select> */}
            </div>

            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select className="u-full-width" onChange={e => guardarCriptoCotizar(e.target.value)}>
                    <option value="">--Escoge tu criptomoneda--</option>
                    {criptomonedas.map(cripto => (
                        <OpCripto
                            key={cripto.CoinInfo.Id}
                            criptomoneda={cripto}
                        />
                    ))}
                </select>
            </div>
            <input type="submit" className="button button-primary u-full-width" value="Calcular"/>
        </form>
    );
};

export default Formulario;