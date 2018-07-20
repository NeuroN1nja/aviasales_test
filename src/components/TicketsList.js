import React, { Component } from "react";
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import Ticket from './Ticket'
import {connect} from 'react-redux'


class TicketsList extends Component {

    render() {

        return (
            <ul className="ticket-list">
                {this.props.data.map(item => <Ticket key={uniqueId()} item={item} />)}
            </ul>
        );
    }
}

TicketsList.propTypes = {
    data: PropTypes.array.isRequired
}

export default connect(state => ({
    data: state.initialState
}))(TicketsList);
