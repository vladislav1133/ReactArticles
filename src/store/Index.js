import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//dev/debug(no production) only
window.store = store

export default store