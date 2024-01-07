const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let word = '';
for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * alphabet.length);
    word += alphabet[index];
}

console.log(word);