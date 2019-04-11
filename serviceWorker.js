if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('serviceWorkerFile.js')
    .then(function(registration){
    //if successful, a service worker registration ties the provided script URL to a scope, which is subsequently used for navigation matching. If the method can't return a ServiceWorkerRegistration, it returns a Promise. You can call this method unconditionally from the controlled page, i.e., you don't need to first check whether there's an active registration.
document.querySelector('#colorHeading').textContent = 'The service worker was successfuly registered';
  }).catch(function(error) {
    document.querySelector('#colorHeading').textContent = error;
  });
} else {
  // The current browser doesn't support service workers.
  var element = document.createElement('p');
  element.textContent = "The current browser doesn't support service workers.";
  document.querySelector('#colorHeading').appendChild(element);
}