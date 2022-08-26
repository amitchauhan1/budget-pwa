importScripts('./ngsw-worker.js');
// import { ApiService } from './app/_services/api-service';
self.addEventListener('sync', (event) => {
  if (event.tag === 'Get_parameter_type') {
    // call method
    event.waitUntil(getDataAndSend());
  }
}); 

function getParameterType(access_token) {
  //indexDb
  var link =ApiService.service_url+ApiService.Get_Parameter_Type+'1';
  fetch(link, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer '+access_token,
    },
    body: '',
  }).then(() => Promise.resolve()).catch(() => Promise.reject());
}

function getDataAndSend() {
  let db;
  const request = indexedDB.open('my-db');
  request.onerror = (event) => {
    console.log('Please allow my web app to use IndexedDB 😃>>>👻');
  };
  request.onsuccess = (event) => {
    db = event.target.result; 
    getData(db);
  };
}

function getData(db) {
  const transaction = db.transaction(['user-store']);
  const objectStore = transaction.objectStore('user-store');
  const request = objectStore.get('name');
  request.onerror = (event) => {
    // Handle errors!
  };
  request.onsuccess = (event) => {
    // Do something with the request.result!
    addData(request.result);
    console.log('Name of the user is ' + request.result);
  };
}