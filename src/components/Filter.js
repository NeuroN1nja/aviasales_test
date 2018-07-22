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
        this.props.toggleOnlyCheckbox(e.target.name)
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
                <Checkbox checked={this.props.checkboxes.transfer_0} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_0" text="Без пересадок" />
                <Checkbox checked={this.props.checkboxes.transfer_1} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_1" text="1 пересадка" />
                <Checkbox checked={this.props.checkboxes.transfer_2} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_2" text="2 пересадки" />
                <Checkbox checked={this.props.checkboxes.transfer_3} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_3" text="3 пересадки" />
            </ul>
        );
    }
}

export default connect(state => ({
    checkboxes: state.checkboxes
}), {reduxToggleCh, toggleAllCheckbox, toggleOnlyCheckbox, toggleAllObserver})(Filter);