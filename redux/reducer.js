import { SEARCH } from "./actionType"

const initialState = {
    searchTerm: '',
    currentPage: 5
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case SEARCH:
            return Object.assign({}, state, {
                searchTerm: action.payload.searchTerm
            })
        default:
            return state
    }
}