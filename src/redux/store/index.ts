import { createStore } from 'redux'
import { reducer } from '../reducer/Reducer'


export const store=createStore(reducer)
