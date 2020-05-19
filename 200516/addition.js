//必要な要素の取得
const addNumber = document.getElementById('add-number');  
const nextMessage = document.getElementById('next-message'); 
const answer = document.getElementById('answer-area');
const sendButton = document.getElementById('send-button');
const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById("reset-button");
const result = document.getElementById('result-area');
const picture = document.getElementById('picture-area');

/**
 * ランダムに2つの整数を生成し、足し算する
 * @param {number} a 整数
 * @param {number} b 整数
 * @param {number} computerAnswer "a"と"b"の和
 */
const addition = () => {
    let a = Math.ceil(Math.random() * 100);
    let b = Math.ceil(Math.random() * 100);        
    addNumber.textContent = `${a} + ${b} = ??`;
    computerAnswer = a + b;
}

let numOfQuestion = 3
let count = 0;
addition(); 
nextMessage.style.display = "none";
resetButton.style.display = "none";
nextButton.disabled = true;

//解答送信ボタンのイベント
sendButton.addEventListener('click', () => {        
    let myAnswer = answer.value;
    if (isNaN(myAnswer)) {
        alert("半角数字以外は入力できません");
    }  
    if (myAnswer == computerAnswer){
        nextMessage.style.display = "block";
        count +=1               
        sendButton.disabled = true;
        nextButton.disabled = false;
        result.innerText = `${count}回正解、やったね！`; 
        if (count === numOfQuestion) {
            result.innerText = `${numOfQuestion}回正解しました!凄いね！！再挑戦するなら "もう一度挑戦" ボタンを押してね"`;
            picture.innerHTML = '<img src="img.png">'
            nextButton.disabled = true;
            nextMessage.style.display = "none";
            resetButton.style.display ="block";
        }             
    } else {
        nextMessage.style.display = "none";
        sendButton.disabled = true;
        nextButton.disabled = true;
        count = 0;
        result.innerText = '残念、不正解です。 "もう一度挑戦" ボタンで最初から挑戦してくださいね';
        picture.innerHTML = '<img src="img02.png">'
        resetButton.style.display ="block";
    }    
    answer.value = '';
    answer.disabled = true;
});

//ボタン・画像の表示、非表示の処理
const processing = () => {
    answer.disabled = false;
    result.innerText = '';
    picture.innerHTML = '';
    nextMessage.style.display = "none";
    sendButton.disabled = false;
    nextButton.disabled = true;
    resetButton.style.display ="none";
}

//"次の問題"ボタンイベント
nextButton.addEventListener('click', ()=> {        
    addition();
    processing();
});

//"もう一度挑戦"ボタンイベント
resetButton.addEventListener('click', () => {
    addition();
    processing();
    count = 0;
});











   
       

    












    



