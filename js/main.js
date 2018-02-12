var buttonEl = document.querySelector('.switch');
var statusEl = document.querySelector('.status');

buttonEl.addEventListener('click', function(e){
  buttonEl.classList.toggle('on');
  buttonEl.classList.toggle('off');
  document.querySelector('body').classList.toggle('light');
  document.querySelector('body').classList.toggle('dark');
  if (buttonEl.classList.contains('on')) {
    statusEl.innerText = "It's so briht in here!"
  } else {
    statusEl.innerText = "Hey, who turned off the lights?"
  }
})
