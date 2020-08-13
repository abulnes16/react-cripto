import React, {Fragment, useState} from 'react';

const useCoin = () => {


    //Custom Hook State
    const [state, setState] = useState('');

   const select = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value=''>Lempiras</option>
            </select>
        </Fragment>
   )

   return [state, setState, select];
};

export default useCoin;