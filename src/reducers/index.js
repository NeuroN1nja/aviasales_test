import { combineReducers } from 'redux'
import currencyId from './currency'
import initialState from './initial'
import checkboxes from './toggleCheckbox'

const reducer = combineReducers({
    currencyId,
    initialState,
    checkboxes
})

export default reducer;