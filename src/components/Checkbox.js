import React from 'react';

const Checkbox = props => {
    return (
        <li className="item" >
            <label>
                <input checked={props.checked} className="checkbox" type="checkbox" name={props.name} onChange={props.toggle}/>
                <span className="checkbox-custom"></span>
                <span className="label">{props.text}</span>
                <span className="only" name={props.name} onClick={props.only}>Только</span>
            </label>
        </li>
    );
}

export default Checkbox;