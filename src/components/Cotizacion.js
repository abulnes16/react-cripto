import React from 'react';

const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) { return null };
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado;
    return (
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es: <span>{PRICE}</span></p>
            <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span></p>
            <p>Última actualización: <span>{LASTUPDATE}</span></p>
        </div>
    );
};

export default Cotizacion;