const Users = require('../models/UserModel')
const router = require('express').Router();

// 首路由展示
router.get('/', function (req, res) {
    res.json({ msg: "首路由展示" })
});

// 查询
router.get('/select', function (req, res) {
    Users.findOne({           //还有find、findAll等方法 
        where: {
            userName: '小明'    //查询条件 
        }
    }).then(result => {
        res.json(result)   // 返给前端数据
    })
});

// 新增
router.get('/add', function (req, res) {
    let obj ={
        userName: '小张',
        age: 50,
        date: '2019-09-09',
    }
    Users.create(obj,{raw:true})
    .then((result) => {
        console.log(result)
        res.json({ msg: "增加成功" })
    })
});

// 修改
router.get('/update', function (req, res) {
    let age = { userName: '小明' }
    Users.update(age, { 'where': { 'userId': 10 } }).then(result => {
        console.log(result)
        res.json({ msg: "修改成功" })
    })
});

// 删除
router.get('/delete', function (req, res) {
    Users.destroy({ 'where': { 'userId': 11 } }).then(result => {
        console.log(result)
        res.json({ msg: "删除成功" })
    })
});


module.exports = router;
