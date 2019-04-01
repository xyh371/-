var mysql = require('mysql');
var connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'login'
});
connect.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('链接成功')
  }
});

module.exports = connect;