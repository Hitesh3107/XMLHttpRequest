const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const resData = document.getElementById("response");
const inp = document.getElementById("body");

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/states");
  xhr.responseType = "json";
  xhr.onload = () => {
    console.log(xhr.response);
    for (let index = 0; index < xhr.response.length; index++) {
      console.log(xhr.response[index].state.state_name);
      resData.innerHTML +=
        JSON.stringify(xhr.response[index].state.state_name) + "<hr>";
    }
  };
  xhr.send();
};

const sendData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/users", inp.value);
  xhr.responseType = "json";
  xhr.onload = () => {
    console.log(xhr.response);
    resData.innerHTML = JSON.stringify(xhr.response);
  };
  xhr.send();
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
