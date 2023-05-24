const axios = require('axios');

async function callApi() {
    try {
        //응답 성공
        const response = await axios.get('https://reqres.in/api/users?page=2');
        console.log(response);
      } catch (error) {
        //응답 실패
        console.error(error);
      }
}

// 실행은 다음과 같이 될 예정입니다
callApi();

//프로토타입 오류: axios 를 사용해서 api 요청을 보내고, 응답을 받아야하는데 없다.


