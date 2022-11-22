// mysql DB 커넥팅 정보
// mysql 모듈 로드 포트번호 3306 X프로토콜 33060 윈도우즈 서비스 이름 MySQL80 기본값


const mysql = require('mysql');
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'fpdhvhfem1202_',
    database: 'o2'
};

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
