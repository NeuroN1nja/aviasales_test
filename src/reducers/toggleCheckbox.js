import { TOGGLE_CHECKBOX, TOGGLE_ALL_CHECKBOX, TOGGLE_ONLY_CHECKBOX, TOGGLE_ALL_OBSERVER } from '../actions'

const checkboxes = {
    0: true,
    1: true,
    2: true,
    3: true,
    transfer_all: true
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
    let result = array.slice(0, array.length-1)
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
            return {...onlyChecks}
            
        default:
            return initialChecks;
    }
};