async function callApi() {
    const response = await axios.get('https://reqres.in/api/users/2');
    console.log(response); // 서버에서 전달하는 응답
    //console.log(response.data); // response 내부의 data 접근 (data, support)
    //console.log(response.data.data); // rseponse 내부의 data 내부의 data 접근 (id, email, first_name, last_name, avatar)
};

callApi();
