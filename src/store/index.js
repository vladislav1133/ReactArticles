import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//dev only/debug(no production)
window.store = store

export default store