const $container = document.querySelector('.container');
const $normalCount = document.querySelector('.normal-count');
const $throttleCount = document.querySelector('.throttle-count');

const throttle = (callback, delay) => {
    let timerId;
    return event => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback(event);
            timerId = null;
        }, delay,event);
    };
};

let normalCount = 0;
$container.addEventListener('scroll',() => {
    $normalCount.textContent = ++$normalCount;
});

let throttleCount = 0;
$container.addEventListener('scroll', throttle(()=>{
    $throttleCount.textContent = ++ throttleCount;
}),100)