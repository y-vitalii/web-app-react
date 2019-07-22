import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    items: []
};

function cartReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
            ...state,
            items: action.data
        };
    }

    return state;
}

export default cartReducer;