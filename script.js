document.querySelector('#sign-up').classList.toggle('active2');
document.querySelector('#login-in').classList.toggle('active3');
document.querySelector('#login_form').classList.toggle('active');

var active1 = document.querySelector('.active'),
  active2 = document.querySelector('.active2'),
  active3 = document.querySelector('.active3');

function firstMessage() {
  active1.style.minHeight = '355px';

  active2.style.top = '0';
  active2.style.animationName = 'opacity1';
  active2.style.animationDuration = '0.7s';
  active2.style.opacity = '1';
  active2.style.zIndex = '1';

  active3.style.top = '60px';
  active3.style.animationName = 'opacity2';
  active3.style.animationDuration = '0.7s';
  active3.style.opacity = '0';
  active3.style.zIndex = '-100';
}

function secondMessage() {
  active1.style.minHeight = '260px';

  active2.style.top = '60px';
  active2.style.animationName = 'opacity2';
  active2.style.animationDuration = '0.0001s';
  active2.style.opacity = '0';
  active2.style.zIndex = '-100';

  active3.style.top = '0';
  active3.style.animationName = 'opacity2';
  active3.style.animationDuration = '0.7s';
  active3.style.opacity = '1';
  active3.style.zIndex = '100';
}
