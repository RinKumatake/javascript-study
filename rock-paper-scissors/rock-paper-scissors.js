'use strict';
/**
 * 出した手の文字列を渡すとコンピュータとじゃんけんした結果を返す
 * @param {String} s プレイヤーの出した手 
 * @return じゃんけんの結果
 */
const rockPaperScissors = (s) => {
    //文字列で与えられたプレイヤーの手を数値化する
    console.log(s);
    let player = 0;
    if (s == "GU") {
        player = 0;
    } else if(s == "CHOKI") {
        player = 1;
    } else if(s == "PA") {
        player = 2;
    }
   
    const rps = ["GU", "CHOKI", "PA"] ;//最終結果出力時にインデックス番号と出した手(数字)と照合するための配列

    const enemy = Math.floor(Math.random()*3); //コンピュータの出す手(0, 1, 2    
   
    const result = player - enemy;
    
    if (result == -1 || result == 2){
        return `あなたが${rps[player]}、相手が${rps[enemy]}なのであなたの勝ちです`;
    } else if(result == -2 || result == 1){
        return `あなたが${rps[player]}、相手が${rps[enemy]}なのであなたの負けです`;
    } else {
        return `あなたが${rps[player]}、相手が${rps[enemy]}なのであいこです。もう一度挑戦してください`;
    }
}


console.log(rockPaperScissors("GU"));
console.log(rockPaperScissors("CHOKI"));
console.log(rockPaperScissors("PA"));



