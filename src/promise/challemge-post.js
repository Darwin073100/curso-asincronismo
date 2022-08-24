// add comment = ctrl + k + c 
// remove comment = ctrl + k + u 
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method:'POST',
        mode: 'cors',
        credentials: 'seme-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

function putData(urlApi, data){
    const response = fetch(urlApi, {
        method:'PUT',
        mode: 'cors',
        credentials: 'seme-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

function getData(urlApi){
    const response = fetch(urlApi,{
        method: 'GET'
    })
    return response;
}

function deleteData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'DELETE'
    });
    return response;
}

//+++++++++++++++----TEST----+++++++++++++++++++++
//|||||||||||||||||||||||||||||||||||||||||||||||||||
//--------DATAS------------
const data = {
    "title": "New Product by EDWIN",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

const update = {
    "id": 234,
    "title": "New Product by Juan Carlos",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

//++++++++++++---Llamadas a las funciones---+++++++++++
// postData(`${API}/products`, data)
//     .then(response => response.json())
//     .then(data => console.log(data));

// putData(`${API}/products/${update.id}`, update)
//     .then(response => response.json())
//     .then(data => console.log(data));

// deleteData(`${API}/products/${233}`)
//     .then(response => response.json())
//     .then(data => console.log(data));

// getData(`${API}/products/${234}`)
//     .then(response => response.json())
//     .then(data => console.log(data));

getData(`${API}/products`)
    .then(response => response.json())
    .then(data => console.log(data));


