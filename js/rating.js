
function showPopup() {
    if (!localStorage.getItem('visitedBefore') || window.performance.navigation.type === 1) { 
        // Если пользователь впервые посещает сайт или страница была перезагружена
        setTimeout(function() {
            document.getElementById('ratingPopup').style.display = 'block';
        }, 5000); // Задержка в 5000 миллисекунд, или 5 секунд
    }
    localStorage.setItem('visitedBefore', true); // Сохраняем информацию о том, что пользователь уже посетил сайт
}

function submitRating(rating) {
    localStorage.setItem('ratingSubmitted', true);
    document.getElementById('ratingPopup').style.display = 'none';
    if (rating < 3) {
        alert('Нам очень жаль, что вам не понравился сайт');
    } else {
        alert('Спасибо за ваше честное мнение!');
    }
}

document.addEventListener('DOMContentLoaded', showPopup);

function closePopup() {
    document.getElementById('ratingPopup').style.display = 'none';
  }

  function myFunction(div) {
    var popup = div.childNodes[1];
    if (popup.style.visibility === "hidden") {
        popup.style.visibility = "visible";
        // Скрываем всплывающее окно через 5 секунд (5000 миллисекунд)
        setTimeout(function() {
            popup.style.visibility = "hidden";
        }, 3000);
    } else {
        popup.style.visibility = "hidden";
    }
}