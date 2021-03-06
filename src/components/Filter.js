import React, { Component } from 'react';
import Checkbox from './Checkbox'
import {connect} from 'react-redux'
import { toggleCheckbox as reduxToggleCh, toggleAllCheckbox, toggleOnlyCheckbox, toggleAllObserver } from '../actions';

class Filter extends Component {

    toggleAll = e => {
        this.props.toggleAllCheckbox(e.target.checked)
    }

    toggleCheckbox = e => {
        this.props.reduxToggleCh(e.target.name, e.target.checked)
        this.props.toggleAllObserver("transfer_all")
        console.log(this.props.checkboxes)
    }

    toggleOnly = e => {
        this.props.toggleOnlyCheckbox()
    }

    render() {
        return (
            <ul className="filter">
            {console.log(this.props.checkboxes)}
                <p className="filter-header">Количество пересадок</p>
                <li className="item">
                    <label >
                        <input
                            name="transfer_all"
                            onChange={this.toggleAll}
                            checked={this.props.checkboxes.transfer_all}
                            className="checkbox"
                            type="checkbox"
                            
                        />
                        <span className="checkbox-custom"></span>
                        <span className="label">Все</span>
                    </label>
                </li>
                <Checkbox checked={this.props.checkboxes[0]} toggle={this.toggleCheckbox} only={this.toggleOnly} name="0" text="Без пересадок" />
                <Checkbox checked={this.props.checkboxes[1]} toggle={this.toggleCheckbox} only={this.toggleOnly} name="1" text="1 пересадка" />
                <Checkbox checked={this.props.checkboxes[2]} toggle={this.toggleCheckbox} only={this.toggleOnly} name="2" text="2 пересадки" />
                <Checkbox checked={this.props.checkboxes[3]} toggle={this.toggleCheckbox} only={this.toggleOnly} name="3" text="3 пересадки" />
            </ul>
        );
    }
}

export default connect(state => ({
    checkboxes: state.checkboxes
}), {reduxToggleCh, toggleAllCheckbox, toggleOnlyCheckbox, toggleAllObserver})(Filter);