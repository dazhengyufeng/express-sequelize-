var Sequelize = require('sequelize');

var db = new Sequelize(
    'test', // 数据库名
    'root',   // 用户名
    'root',   // 用户密码
    {
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306,        // 数据库服务器端口
        'define': {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            'underscored': true
        }
    }
);
    // 检验数据库连接 
    db.authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(err => {
        console.error('数据库连接失败', err);
    });

module.exports = db