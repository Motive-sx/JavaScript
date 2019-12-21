const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1000);
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('fadeOu', 'hidden');
    modal.classList.add('animated', 'fadeIn');
});