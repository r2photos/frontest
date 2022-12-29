//form range
function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;
}

document.querySelector('.order__form-select').addEventListener('click', function() {
    document.querySelector('.order__form-body').classList.toggle('order__form-body--visible');
    this.classList.toggle('order__form-select--active');
});

document.querySelectorAll('.order__form-body-item').forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.order__form-select').innerHTML = this.innerHTML;
        document.querySelector('.order__form-select').focus();
        document.querySelector('.order__form-body').classList.remove('order__form-body--visible');
        document.querySelector('.order__form-body-item').classList.add('order__form-body--active');
        document.querySelector('.order__form-select').classList.remove('order__form-select--active');
    });
});

//burger btn
const hamb = document.querySelector(".header__burger");
const body = document.body;

const menu = document.querySelector(".header__nav");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  body.classList.toggle("no-scroll");
  menu.classList.toggle('show');
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}