'use strict';
const startButton = document.getElementById('start');
const playerInput = document.getElementById('rps');
const display = document.getElementById('display-area');

/**
 * 出した手の文字列を渡すとコンピュータとじゃんけんした結果を返す
 * @param {String} s プレイヤーの出した手 
 * @return じゃんけんの結果
 */
const rockPaperScissors = (s) => {
    //文字列で与えられたプレイヤーの手を数値化する
    let player = 0;
    if (s == "GU") {
        player = 0;
    } else if(s == "CHOKI") {
        player = 1;
    } else {
        player = 2;
    }
    
    let enemy = Math.floor(Math.random()*3); //コンピュータの出す手(0, 1, 2)
    let rps = ["GU", "CHOKI", "PA"] //配列のインデックス番号をコンピュータの出した手(数字)と照合する
    if(player > enemy) {
        return `あなたが${s}、相手が${rps[enemy]}なのであなたの勝ちです`;
    } else if(player < enemy){
        return `あなたが${s}、相手が${rps[enemy]}なのであなたの負けです`;
    } else {
        return `あなたが${s}、相手が${rps[enemy]}なのであいこです。もう一度挑戦してください`;
    }
}


console.log(rockPaperScissors("GU"));
console.log(rockPaperScissors("CHOKI"));
console.log(rockPaperScissors("PA"));



