const cookies = document.cookie.split(';');
const loggedInCookie = cookies.find(cookie => cookie.trim().startsWith('loggedIn='));

if (loggedInCookie) {
  window.location.href="../pages/shop.html";
}
function f1(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username == 'admin' && password == 'password') {
  window.location.href="../pages/shop.html";
  alert("Zalogowano");
  const expires = new Date(Date.now() + 3600000); // 1 godzina
  document.cookie = `loggedIn=true; expires=${expires.toUTCString()}; path=/`;
} else {
  alert("Złe dane");
}
}


