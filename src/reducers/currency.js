import { CURRENCY } from "../actions";

export default (activeId = "RUB", action) => {
    switch (action.type) {
        case CURRENCY: 
            return action.payload.id
        default:
            return activeId;
    }
};

