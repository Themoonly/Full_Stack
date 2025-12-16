const button = document.getElementById('button');
const messagedisplay = document.getElementById('message');

function handcclick(){
    button.textContent = 'clicked';

    messagedisplay.textContent = 'you call function success!!'

    button.disable = true;
}

button.addEventListener('click', handcclick);

console.log('javascript download success!')