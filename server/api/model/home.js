const db = require('../../connect/index.js');

const getBanner = () => {
  return new Promise((resolve, object) => {
    const sql = 'select * from banner';
    db.query(sql, [], (error, resules) => {
      if (!error) {
        resolve(resules);
      }
    })
  })
}

module.exports = {
  getBanner
}