/**
 * 
 * 发送验证
 */
const user = require('../model/user.js')
const Verification = (req, res) => {
  const { phone, code} = req.query;
  let sendcode = '';
  while (sendcode.length < 6) {
    sendcode += parseInt(Math.random() * 10);
  };
  //服务端，发送到客户端
  // res.cookie('code', sendcode, { expires: new Date(Date.now() + 900000)});
  req.session.code = sendcode;
  res.send({
    code: 1,
    mag: `用户${phone},验证码:[${sendcode}]已发送您的手机`
  });
};
/**
 * 
 * 验证登录
 */

const login = async (req, res, next) => {
  const {phone, code} = req.body;
  // console.log(req.session)
  if (code === req.session.code) {
    const Info = await user.getInfo(phone);
    if (Info) {
      // res.cookie('token', info.phone, {maxAge: 1000*10})     
      res.send({
        code: 1,
        msg: '登陆成功',
        data: Info
      })
    } else {
      const newUser = await user.insert(phone);
      const info = await user.getInfo(phone);
      res.cookie('token', info.phone)
      res.send({
        code: 1,
        msg: '插入成功',
        data: info
      })
    }
  } else {
    res.status(422).send({
      code: 0,
      msg: '验证码错误'
    })
  }
}

const UserInfo = (req, res, next) => {
  // const phone = req.cookies.phone;
  // const info = await user.getInfo(phone);
  res.send({
    code: 1
  })
  // if (phone) {
  //   res.send({
  //     code: 1,
  //     'data': info
  //   })
  // } else {
  //   res.status(401).send({
  //     'name': '666',
  //     'msg': '用户登录',
  //     'code': 0
  //   })
  // }
}
module.exports = {
  Verification,
  login,
  UserInfo
};