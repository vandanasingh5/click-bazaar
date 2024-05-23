import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { authReducer } from "./Auth/Reducer"
import { customerProductReducer } from "./Product/Reducer"
import { cartReducer } from "./Cart/Reducer"
import { orderReducer } from "./Order/Reducer"

const rootReducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export default store