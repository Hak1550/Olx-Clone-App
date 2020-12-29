import {combineReducer} from 'react-redux'
import state from './index'
import ActiveProduct from './ActiveProduct'

const allReducers = combineReducer ({
    state: state,
    ActiveProduct: ActiveProduct,
})

export default allReducers
