import { SEARCH } from "./actionType"

export const search = (searchTerm) =>{
    return{
        type: SEARCH,
        payload: {searchTerm: searchTerm}
    }
}