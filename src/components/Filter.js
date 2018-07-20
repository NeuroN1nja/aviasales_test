import React, { Component } from 'react';
import Checkbox from './Checkbox'

class Filter extends Component {
    state = { 
        transfer_all: true,
        transfer_0: true,
        transfer_1: true,
        transfer_2: true,
        transfer_3: true,
    }

    toggleAll = e => {
        this.setState({
            transfer_all: !this.state.transfer_all,
            transfer_0: !this.state.transfer_all,
            transfer_1: !this.state.transfer_all,
            transfer_2: !this.state.transfer_all,
            transfer_3: !this.state.transfer_all,
        })
    }

    toggleCheckbox = e => {
        const {transfer_0, transfer_1, transfer_2, transfer_3} = this.state
        this.setState({
            [e.target.name]: e.target.checked,
        },() => {
            if (transfer_0
            && transfer_1
            && transfer_2
            && transfer_3) {
            this.setState({
                transfer_all: true
            })
        } else {
            this.setState({
                transfer_all: false
            })
        }
        console.log(transfer_0, transfer_1, transfer_2, transfer_3)
        });
       
    }

    toggleOnly = e => {
        this.setState({
            transfer_all: false,
            transfer_0: false,
            transfer_1: false,
            transfer_2: false,
            transfer_3: false,
            [e.target.name]: true
        })
}

    render() {
        return (
            <ul className="filter">
                <p className="filter-header">Количество пересадок</p>
                <li className="item">
                    <label >
                        <input
                            name="transfer_all"
                            onChange={this.toggleAll}
                            checked={this.state.transfer_all}
                            className="checkbox"
                            type="checkbox"
                            
                        />
                        <span className="checkbox-custom"></span>
                        <span className="label">Все</span>
                    </label>
                </li>
                <Checkbox checked={this.state.transfer_0} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_0" text="Без пересадок" />
                <Checkbox checked={this.state.transfer_1} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_1" text="1 пересадка" />
                <Checkbox checked={this.state.transfer_2} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_2" text="2 пересадки" />
                <Checkbox checked={this.state.transfer_3} toggle={this.toggleCheckbox} only={this.toggleOnly} name="transfer_3" text="3 пересадки" />
            </ul>
        );
    }
}

export default Filter;