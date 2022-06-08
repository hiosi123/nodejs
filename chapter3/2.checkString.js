// const {odd, even} = require('./2.checkOddEven.js')
import {odd,even } from  './2.checkOddEven.js'

export function checkStringOddOrEven(str){
    if(str.length %2){
        return odd
    }
    return even
}

// module.exports = {checkStringOddOrEven}
// export default checkStringOddOrEven

export function getToken() {
    const i = 6;
    if (i === undefined) {
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요');
        return;
    } else if (i <= 0) {
        console.log('에러 발생 !! 갯수가 너무 적습니다!!!');
        return;
    } else if (i > 10) {
        console.log('에러 발생 !! 갯수가 너무 많습니다!!!');
        return;
    }
    const result = String(Math.floor(Math.random() * (10 ** i))).padStart(i,'0')
    return result;
}