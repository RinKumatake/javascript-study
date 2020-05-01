'use strict';
const combination = (array) => {
    const array2 = [];
    for(let i = 0; i < array.length -1; i++) {
        let tmpArray = array.slice(i+1,array.length)
        for(let j = 0; j < tmpArray.length; j ++) {
            x = `${array[i]} vs ${tmpArray[j]}`;
            array2.push(x);
        }
    }    
    return array2
}

const array1 = ['A', 'B', 'C', 'D', 'E'];
for(element of combination(array1)){
    console.log(element);
}


    
