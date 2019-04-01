const home = require('../model/home.js')

const getBanner = async (req, res, next) => {
  // await 的返回值是Promise
  try {
    const data = await home.getBanner();
    res.send(data)
  } catch {
    res.status(400).send({
      msg: '666'
    })
  }
}
module.exports = {
  getBanner
}