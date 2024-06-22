
function showPopup() {
    if (window.performance.navigation.type === 1) { // Если страница была перезагружена
        setTimeout(function() {
            document.getElementById('ratingPopup').style.display = 'block';
        }, 5000); // Задержка в 5000 миллисекунд, или 5 секунд
    }
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

