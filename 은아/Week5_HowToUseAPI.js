const axios = require('axios');

function callApi() {
    axios.get('https://reqres.in/api/users/2')
        .then(function (response) {
            const responseData = response.data;
            console.log(responseData);
        })
        .catch(function (error) {
            console.log(error);
        });
}

callApi();
/*
현재 프로토타입은 호출할 API의 URL, 요청 방식(get,post)등을 지정하지 않고 있기 때문에 실행이 되지 않습니다.
그리고 Ajax나 Axios를 사용하지 않고 있습니다. 그래서 API를 호출할 수 없습니다.
따라서, axios 라이브러리를 사용하여 API의 URL과 요청 방식, 요청 매개변수를 불러와야 합니다. 
그리고 변수값을 response가 아닌 responseData를 사용해야 합니다.
function (response)에서 response가 이미 사용됐기 때문입니다.
*/
