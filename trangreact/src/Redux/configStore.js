import{combineReducers,createStore}from'redux'
import { BaiTapDatVeReducer } from './BaiTapDatVeReducer'
import {BaiTapOanTuXiReducer} from './BaiTapOanTuXiReducer'
const rootReducer = combineReducers({
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer
})

export const store=createStore(rootReducer)