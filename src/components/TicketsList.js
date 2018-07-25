import React, { Component } from "react";
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import Ticket from './Ticket'
import {connect} from 'react-redux'


class TicketsList extends Component {

    state = {
        USD: '',
        EUR: '',
    }

    componentDidMount() {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(response => response.json())
            .then(data => data.Valute)
            .then(result => {
                console.log(result)
                this.setState({
                    USD: result.USD.Value,
                    EUR: result.EUR.Value
                })
            })
    }

    render() {

        return (
            <ul className="ticket-list">
                {this.props.data.length > 0
                    ? this.props.data.map(item => <Ticket key={uniqueId()} item={item} USD={this.state.USD} EUR={this.state.EUR}/>)
                    : <p className="no-tickets">Ничего не найдено, попробуйте изменить параметры поиска</p>}
            </ul>
        );
    }
}

TicketsList.propTypes = {
    data: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    
    const filteredData = state.initialState.filter(ticket => 
        state.checkboxes[ticket.stops])

    return {
        data: filteredData
    }
}

export default connect(mapStateToProps)(TicketsList);
