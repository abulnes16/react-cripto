import axios from 'axios';

export const consultarAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10 &tsym=USD';
    const resultado = await axios.get(url);
    return resultado;
}

export const cotizarCripto = async (moneda, cripto) =>{
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    const resultado = await axios.get(url);
    return resultado;
}