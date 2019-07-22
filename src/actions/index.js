import fetchData from '../api/index'

export function addArticle() {
    debugger
    // const data = await fetchData();
    //
    // return {
    //     type: "ADD_ARTICLE",
    //     data
    // }
    return async (dispatch) => {
        const data = await fetchData();

        debugger
        dispatch({
            type: "ADD_ARTICLE",
            data
        })
    };
}
