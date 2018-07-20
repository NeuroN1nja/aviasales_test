import { CURRENCY } from "../actions";

export default (activeId = "1", action) => {
    switch (action.type) {
        case CURRENCY: 
            return action.id
        default:
            return activeId;
    }
};

