const $ =(id) => {
    return document.getElementById(id);
};

const $days = $('days');
const $hours = $('hours');
const $minutes = $('minutes');
const $seconds = $('seconds');

const targetDate = new Date('2023-12-31T23:59');

const updateTimer = () => {
    let totalInSec = Math.floor((targetDate.valueOf() - new Date().valueOf()) / 1000)

    // if (totalInSec < 0 ){
    //     totalInSec = 0;
    // }
    if (totalInSec === -3) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }


    const seconds = Math.floor((totalInSec % 60));

    const minutes = Math.floor((totalInSec / 60) % 60);

    const hours = Math.floor((totalInSec / 60 /60 ) % 24);

    const days = Math.floor((totalInSec / 60 /60 / 24));

    const format = (num) => {
        return `${num}`.padStart(2, '0')
    };

    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        document.getElementById('countdown-message').innerText = 'WANJIIRRUU!!! Happy New Year!';}
};
setInterval(updateTimer, 1000);

const createSnowFlake = () => {
    const $snow = document.createElement('i');
    $snow
        .classList
        .add('fas', 'fa-snowflake','snowflake')

    $snow.style.left = `${Math.random() * window.innerWidth}px`;

    $snow.style.animationDuration = `${(Math.random() * 3 + 2)}s`;

    $snow.style.opacity = Math.random();

    $snow.style.fontSize = `${Math.random() * 20}px`;

    $snow.style.filter = 'blur(1px)'

    document.body.appendChild($snow);

    $snow.onanimationend = () => {
        $snow.remove();
    };

    requestAnimationFrame(createSnowFlake);
};

requestAnimationFrame(createSnowFlake);