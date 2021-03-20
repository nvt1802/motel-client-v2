import province from './province'
import district from './district'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({ province, district })

export default rootReducers