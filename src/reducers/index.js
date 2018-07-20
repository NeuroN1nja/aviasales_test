import { combineReducers } from 'redux'
import currencyId from './currency'
import initialState from './initial'

const reducer = combineReducers({
    currencyId,
    initialState
})

export default reducer;