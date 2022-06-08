function run() {
    console.log('3초 후 실행')
}

console.log('시작')
setTimeout(run, 3000); // 비동기 - 이것 때문에 eventloop 가 나온다.
console.log('끝')

//호출스테구 백그라운드 테스크 큐


function oneMore() {
    console.log('one more')
}
function run() {
    console.log('run run')
    setTimeout(() => {
        console.log('wow')
    },0)
    new Promise((resolve) => {
        resolve('hi')
    })
    .then(console.log);
    oneMore();
}

setTimeout(run, 5000);