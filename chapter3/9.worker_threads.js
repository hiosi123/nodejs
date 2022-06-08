import { isMainThread, Worker, parentPort } from "worker_threads";

if (isMainThread) { //메인 스레드
    const worker = new Worker(__filename)
    worker.on('message', (value) => console.log('워커로부터',value))
    worker.on('exit', () => console.log('워커 끝~'))
    worker.postMessage('ping')
} else { // 워커 스레드
    parentPort.on('message', (value) => {
        console.log('부모로부터', value);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}

//워커 쓰레드는 멀티 cpu 를 사용하고 싶을때 더 알아보도록 하자 