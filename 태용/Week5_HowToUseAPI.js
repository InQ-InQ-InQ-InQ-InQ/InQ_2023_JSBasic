import axios from 'axios';

function callApi() {
    axios.get('https://reqres.in/api/users/2')
        .then(function response() {
            console.log(response); 
        })
        .catch(function error() {
            console.error(error);
        });
}
callApi();


/*
import axios from 'axios';

async function callApi() {
    const response = await axios.get('https://reqres.in/api/users/2');
    console.log(response);
  }
}
callApi();

*/
