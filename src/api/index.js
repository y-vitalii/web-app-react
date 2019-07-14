export default function fetchData() {
    // return function action(dispatch) {
    //     const testData = [
    //         {key: 1, name: '1', cost: 100, imgSrc: ''},
    //         {key: 2, name: '1', cost: 200, imgSrc: ''},
    //         {key: 3, name: '1', cost: 300, imgSrc: ''},
    //         {key: 4, name: '1', cost: 400, imgSrc: ''}
    //     ];
    //


    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
        }, 1050)
    }).then(function () {
        return [
            {key: 1, name: '1', cost: 100, imgSrc: ''},
            {key: 2, name: '1', cost: 200, imgSrc: ''},
            {key: 3, name: '1', cost: 300, imgSrc: ''},
            {key: 4, name: '1', cost: 400, imgSrc: ''}
        ];
    });
    // };
}