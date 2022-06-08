//deprecated 와 promisify
import util from 'util'
import crypto from 'crypto'

const dontUseMe = util.deprecate((x,y) => {
    console.log(x+y);
}, 'dontUseMe 함수는  deprecated 되었으니 더 이상 사용하지 마세요!')
dontUseMe(1,2);
//라이브러리 만들때

const randomBytesPromise = utils.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .them((buf) => {
        console.log(buf.toString('base64'))
    })