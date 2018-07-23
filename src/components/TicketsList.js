import React, { Component } from "react";
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import Ticket from './Ticket'
import {connect} from 'react-redux'


class TicketsList extends Component {

    render() {

        return (
            <ul className="ticket-list">
                {this.props.data.length > 0
                    ? this.props.data.map(item => <Ticket key={uniqueId()} item={item} />)
                    : <p className="no-tickets">Ничего не найдено, попробуйте изменить параметры поиска</p>}
            </ul>
        );
    }
}

TicketsList.propTypes = {
    data: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    let result = []
    for (let key in state.checkboxes) {
        if (state.checkboxes[key]) {
            result.push(key.toString().split('')[key.length-1])
        }
    }
    const filteredData = state.initialState.filter(ticket => {  
        return result.includes(ticket.stops.toString())
    })

    return {
        data: filteredData
    }
}

export default connect(mapStateToProps)(TicketsList);
