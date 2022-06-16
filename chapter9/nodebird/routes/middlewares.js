exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()){ //로그인이 되어 있으면
    next()
  } else {
    res.status(403).send('로그인 필요') // 아니면
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) { // 로그인이 안되어 있으면
    next()
  } else{
    const message = encodeURIComponent('로그인한 상태입니다') // 되어 있으면
    res.redirect(`/?error=${message}`)
  }
}