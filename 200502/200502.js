const moji = document.getElementById('moji');
moji.innerText = 'あいうえお';
moji.addEventListener('click', function(){
    let color = ['orange', 'green', 'blue', 'red'];
    let number = Math.floor(Math.random()*4)
    mojiColor = color[number]
    moji.style.color = mojiColor;
})