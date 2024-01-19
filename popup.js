
function openPopup() {
    document.getElementById('popup').style.bottom = '0';
}

function closePopup() {
    document.getElementById('popup').style.bottom = '-100%';
}

window.onload = openPopup;

