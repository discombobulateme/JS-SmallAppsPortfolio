//AJAX requisition - Method 1: XML Http Request
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/discombobulateme');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    //4 = variable that means that answear came back in Network
    console.log(JSON.parse(xhr.responseText));
  }
}

console.log('METHOD 1 ------')

//AJAX requisition Method 2: Promisse
var myPromisse = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.github.com/users/discombobulateme');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Requisition Error');
        }
      }
    }
  });
}

myPromisse()
  .then(function(response){
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  })

  console.log('METHOD 2 ------')

//AJAX using AXIOS library https://github.com/axios/axios
axios.get('http://api.github.com/users/discombobulateme')
  .then(function(response){
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  })

  console.log('METHOD 3 ------')