//예외 처리하기
//throw를 하는 경우 반듯이 try catch 문으로 처리해줘야 한다
setInterval(() => {
    console.log('시작')
    try {
        throw new Error('서버를 고장내주마!')

    } catch(err) {
        console.error(err)
    }
},1000);