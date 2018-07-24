import React from 'react';
import { uniqueId } from 'lodash'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { currencyChange } from '../actions';

const mapCurrency = ["RUB", "USD", "EUR"]

const Currency = props => {
        const handleChange = (e) => {
            props.currencyChange(e.target.id)
        }
        
        return (
            <ul className="tabs" onClick={handleChange} >
                {mapCurrency.map(item => 
                    <li
                        key={uniqueId()}
                        id={item}
                        className={props.currencyId === `${item}` ? "tab tab-active" : "tab"}
                    >
                        {item}
                    </li>)}
            </ul>
        );
   
}

Currency.propTypes = {
    currencyId: PropTypes.string.isRequired,
    currencyChange: PropTypes.func.isRequired,
}


export default connect(state => ({
    currencyId: state.currencyId
}), {currencyChange})(Currency);