const db = require('../../connect/index.js');

const getInfo = (phone) => {
  return new Promise((resolve, object) => {
    const sql = 'select * from user where phone=?';
    db.query(sql, [phone], (error, resules) => {
      if (!error) {
        resolve(resules[0]);
      }
    })
  })
}
const insert = (p) => {
  return new Promise((resolve, object) => {
    const info = 'insert into user (phone) values (?)';
    db.query(info, [p], (error, resules) => {
      if (!error) {
        resolve(resules);
      }
    })
  })
}

module.exports = {
  getInfo,
  insert
}