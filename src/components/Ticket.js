import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru';

const transferName = {
    one: " пересадка",
    more: " пересадки"
}

const cashSign = {
    "RUB": "₽",
    "USD": "$",
    "EUR": "€"
}

const Ticket = props => {
    console.log('upd ticketlist');
    const departure_date = moment(props.item.departure_date, "DD-MM-YYYY").locale('ru').format("D MMM YYYY, dd")
    const arrival_date = moment(props.item.arrival_date, "DD-MM-YYYY").locale('ru').format("D MMM YYYY, dd")

    const price = () => {
        if (props.currencyId !== "RUB") {
            return `${cashSign[props.currencyId]}${Math.round(props.item.price / props[props.currencyId])}`
        }  else {
            return props.item.price + cashSign[props.currencyId]
        }
    }

    return (
        
        <li className="ticket">
                
                        <div className="left-side">
                              <div className="air-logo">
                                <img src={require(`../img/${props.item.carrier}.png`)} alt="logoAir"/>
                              </div>
                              <br/>
                              <button className="buttonBuy" >
                                <span>Купить</span>
                                <span>за {price()}</span>
                              </button>
                        </div>
        
                        <div className="right-side">
                                <div className="departure">

                                        <div className="time">
                                            {props.item.departure_time}
                                        </div>

                                        <div className="city">
                                            {props.item.origin}, {props.item.origin_name}
                                        </div>
                                        
                                        <div className="date">
                                            {departure_date}
                                        </div>

                                        </div>

                                        <span className="transfer">
                                            {props.item.stops === 0 ? " "
                                            :
                                            (props.item.stops < 2 ? props.item.stops + transferName.one
                                            :
                                            props.item.stops + transferName.more)}
                                        </span>

                                        <div className="arrival">

                                            <div className="time">
                                                {props.item.arrival_time}
                                            </div>

                                            <div className="city">
                                            {props.item.destination_name}, {props.item.destination}
                                            </div>

                                            <div className="date">
                                                {arrival_date}
                                            </div>

                                        </div>
                        </div>
                    </li>
    );
}

Ticket.propTypes = {
    currencyId: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
}

export default connect(state => ({
    currencyId: state.currencyId
}))(Ticket);