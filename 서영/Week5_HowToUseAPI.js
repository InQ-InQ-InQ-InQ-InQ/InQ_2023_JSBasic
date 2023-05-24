import axios from 'axios';

function callApi(){ 
    const response=axios.get('https://reqres.in/api/users?page=2') //파라미터로 전달된 주소에 GET 요청
        .then(response=>{console.log(response);})     //.then을 사용하여 받아온 data 확인     
}
callApi();
