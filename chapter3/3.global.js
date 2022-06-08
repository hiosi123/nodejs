//global 은 거의 모든 기능들을 가지고 있다, 다만 생략되어서 안보일뿐...
//console.dir('객치 로깅')
//console.time, console.timeEnd (시간 로깅)
//console.trace ('호출 스택 로깅')

const timeout = setTimeout(() => {
    console.log('1.5초 후 실행')
},1500)

const interval = setInterval(() => {
    console.log('1초마다 실행')
},1000)

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.')
},3000)

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.')
})

clearImmediate(immediate2)