"use strict";
let add = 0;
loop:
for (let i = 1; i < 10; i++) {
    for (let j = 1; j<10; j++){
        const multi = i * j;        
        console.log(`${i}×${j}=${multi}`)
        if(multi%3 !== 0) {
            add += multi;
            console.log(`${multi}を足したので、${add}になりました`);
            if (add > 200) {
                console.log(`これまでの合計${add}、200を超えたから終わり`);
                break loop;
            }
        }
    }
}