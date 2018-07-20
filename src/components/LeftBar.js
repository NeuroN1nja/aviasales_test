import React from 'react';
import Currency from './Currency'
import Filter from './Filter'

const LeftBar = props => {
    return (
        <div className="left-block">
            <p className="filter-header">Валюта</p>
            <Currency />
            <Filter />
        </div>
    );
}

export default LeftBar;