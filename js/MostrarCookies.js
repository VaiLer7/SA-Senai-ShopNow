
function MostrarCookies(element) {
    var induvidual = element.closest('.SecaoCookies');
    var img = element.querySelector('img');

        if (img.style.transform != 'rotate(180deg)') {
            induvidual.style.maxHeight = 'fit-content';
            img.style.transform = "rotate(180deg)";
        } else {
            induvidual.style.maxHeight = '20px';
            img.style.transform = "rotate(0)";
        }
    }