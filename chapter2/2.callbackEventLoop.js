function run() {
    console.log('3초 후 실행')
}

console.log('시작')
setTimeout(run, 3000); // 비동기 - 이것 때문에 eventloop 가 나온다.
console.log('끝')