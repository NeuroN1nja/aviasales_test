import tickets from "../tickets.json"
import { INITIAL } from "../actions";


export default (initialState = tickets.tickets, action) => {
    switch (action.type) {
        case INITIAL:
            return initialState
        default:
            return initialState;
    }
};