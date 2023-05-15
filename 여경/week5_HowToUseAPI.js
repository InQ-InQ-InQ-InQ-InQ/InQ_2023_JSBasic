import axios from 'axios';

async function callApi(){
    const response=await axios.get('https://reqres.in/api/users?page=2');
    console.log(response.data);
}
callApi();