const db = require('../config/db.js');
const Sequelize = require('sequelize');

const { NOW } = Sequelize;

var User = db.define('users', {
    // 用户id
    userId: {
        field: 'user_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    // 年龄
    age: {
        field: 'age',
        type: Sequelize.INTEGER,
    },
    // 用户名
    userName: {
        field: 'name',
        type: Sequelize.STRING,
    },
    // 是否逻辑删除
    isDelect: {
        field: 'is_delete',
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
    },
    // 出生年月
    date: {
        field: 'date',
        type: Sequelize.DATE,
        // defaultValue: NOW,
        // get() {
        //     return TimeUtil.nowTime(this.getDataValue('createtime'))
        // }
    },
    // 创建时间
    creat_time: {
        field: 'creat_time',
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: NOW,
        // get() {
        //     return TimeUtil.nowTime(this.getDataValue('createtime'))
        // }
    }
},
    // 不知道什么用,反正有用
    {
        tableName: 'users',
        timestamps: false
    }
);

module.exports = User 