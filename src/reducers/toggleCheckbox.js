import { TOGGLE_CHECKBOX, TOGGLE_ALL_CHECKBOX, TOGGLE_ONLY_CHECKBOX, TOGGLE_ALL_OBSERVER } from '../actions'

const checkboxes = {
    transfer_all: true,
    transfer_0: true,
    transfer_1: true,
    transfer_2: true,
    transfer_3: true,
}

function changeObj(obj, newValue) {
    for (let key in obj) {
        obj[key] = newValue;
    }
}

function observerAll(obj) {
    let array = [];
    for (let key in obj) {
        array.push(obj[key])
    }
    let result = array.slice(1)
    return !(result.indexOf(false) !== -1)
}


export default (initialChecks = checkboxes, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {...initialChecks, [action.payload.name]: action.payload.checked}

        case TOGGLE_ALL_OBSERVER:
            return {...initialChecks, [action.payload.all]: observerAll(initialChecks)}

        case TOGGLE_ALL_CHECKBOX:
            const allChecks = {...initialChecks}
            changeObj(allChecks, action.payload.checked)
            return allChecks

        case TOGGLE_ONLY_CHECKBOX:
            const onlyChecks = {...initialChecks}
            changeObj(onlyChecks, false)
            return {...onlyChecks, [action.payload.name]: true}
            
        default:
            return initialChecks;
    }
};