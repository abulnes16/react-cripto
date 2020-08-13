import React from 'react';

const OpCripto = ({criptomoneda}) => {
    const {FullName, Name} = criptomoneda.CoinInfo;
    return (
      <option value={Name}>{FullName}</option>
    );
};

export default OpCripto;