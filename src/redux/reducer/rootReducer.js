import {
    GET_PRODUCTOS
} from "../actions/actionsTypes"

const inicialState = {
    productos: []
}

export default function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case GET_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}