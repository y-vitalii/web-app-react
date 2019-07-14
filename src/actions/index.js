import fetchData from '../api/index'

export function addArticle() {
    // const data = await fetchData();
    //
    // return {
    //     type: "ADD_ARTICLE",
    //     data
    // }
    return async (dispatch) => {
        const data = await fetchData();

        dispatch({
            type: "ADD_ARTICLE",
            data
        })
    };
}
