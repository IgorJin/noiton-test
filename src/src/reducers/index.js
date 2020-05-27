import { combineReducers } from 'redux'
import formReducer from './formReducer'
import tableReducer from './tableReducer'

export default combineReducers({
  formReducer,
  tableReducer
})
