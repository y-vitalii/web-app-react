import {ADD_ITEM} from "../constants/action-types";

const initialState = {
    items: []
};

function cartReducer(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        const data = [].concat(state.items);

        data.push(action.data);

        return {
            ...state,
            items: data
        };
    }

    return state;
}

export default cartReducer;