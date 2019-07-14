import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        // state.articles = action.data;
        return {
            ...state,
            articles: action.data
        };
        // state.articles.push(action.data);
        // state.setState({articles: action.data})

        // Object.assign({}, state, {
        //     articles: action.data
        // })
    }

    // debugger
    return state;
}

export default rootReducer;