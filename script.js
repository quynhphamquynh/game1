const secretNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 5;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const correctSound = document.getElementById('correctSound');
    const wrongSound = document.getElementById('wrongSound');

    if (guess === secretNumber) {
        setMessage(`Chúc mừng! Bạn đã tìm ra số bí ẩn: ${secretNumber}`, 'green');
        disableInput();
        playSound(correctSound);
    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            setMessage(`Rất tiếc! Bạn đã hết số lần đoán. Số bí ẩn là: ${secretNumber}`, 'red');
            disableInput();
            playSound(wrongSound);
        } else {
            setMessage(`Số của bạn quá ${guess > secretNumber ? 'lớn' : 'nhỏ'}. Bạn còn ${guessesLeft} lần đoán.`, 'black');
            playSound(wrongSound);
        }
    }
}

function giveHint() {
    const hint = secretNumber > 50 ? 'Số bí ẩn lớn hơn 50' : 'Số bí ẩn nhỏ hơn hoặc bằng 50';
    setMessage(`Gợi ý: ${hint}`, 'blue');
}

function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}

function playSound(sound) {
    sound.play();
}
