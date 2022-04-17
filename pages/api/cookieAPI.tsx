import cookie from 'cookie'

const CookieAPI = (req, res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', req.body.token, {
      httpOnly: true,
      seure: process.env.NODE_ENV !== 'developement',
      maxAge: 60 * 60,
      //   expires: new Date(0),
      sameSite: 'strict',
      path: '/',
    }),
  )
  res.statusCode = 200
  res.json({ success: true })
}

export default CookieAPI
