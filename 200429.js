'use strict';
const func = (n="panda") => {
  if (n == "panda"){
      return "引数が設定されてません"
  } else{
        const typeJudge = typeof(n);
        if (typeJudge=="number") {
            return "引数は数値です"
        }  else if (typeJudge=="string") {
            if(isNaN(n)){
                return "引数は文字列で、数値に変換できません"
            } else {
                return "引数は文字列ですが、数値に変換が可能です"
            } 
        }  else if (typeJudge=="function") {
                return "引数は関数です"
        } 
    }
}
console.log(func());

console.log(func(1));

console.log(func('1'));

console.log(func('あいうえお'));

console.log(func(func));

