import '../styles/index.scss';

window.onload = function() {

  window.showPopup = function() {
    var popup = document.getElementById('popup');
    popup.classList.add('show');
  }

  window.closePopup = function() {
    var popup = document.getElementById('popup');
    popup.classList.remove('show');
  }
}
