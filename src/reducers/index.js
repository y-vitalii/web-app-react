import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    debugger
    if (action.type === ADD_ARTICLE) {
        state.articles.push(action);
    }

    return state;
}

export default rootReducer;