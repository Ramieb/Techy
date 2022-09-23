import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {priceManager} from '../reducers/price';

function PriceFilter() {
    const dispatch = useDispatch()
    const price = useSelector((state) => state.price.value)
    return (
      <fieldset style={{padding:'0.5rem'}}>
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          type="range"
          id="min-price"
          min="0"
          max= "3000"
          step="100"
          style={{marginLeft:'2.657px'}}
          value={price.priceFilter[0]}
          onChange={e => dispatch(priceManager({ priceFilter: [e.target.value, price.priceFilter[1]]}))}
        />
        {' '}${price.priceFilter[0]}
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="0"
          max="3000"
          step="100"
          style={{marginLeft:'1px'}}
          value={price.priceFilter[1]}
          onChange={e => dispatch(priceManager({ priceFilter: [price.priceFilter[0], e.target.value]}))}
        />
        {' '}${price.priceFilter[1]}
      </label>
    </fieldset>
    );
}

export default PriceFilter;