const express = require("express");
const router = express.Router();

const data = [
    {
        'id' : 1,
        'image' : 'http://placeimg.com/80/80/any',
        'name' : '홍길동',
        'birthday' : '19930503',
        'age' : '29',
        'gender' : '남자',
        'jop' : '직장인'
    }, 
    {
        'id' : 2,
        'image' : 'http://placeimg.com/80/80/a2',
        'name' : '홍길자',
        'birthday' : '19980610',
        'age' : '24',
        'gender' : '여자',
        'jop' : '학생'
    },
    {
        'id' : 3,
        'image' : 'http://placeimg.com/80/80/3',
        'name' : '홍길구',
        'birthday' : '19890812',
        'age' : '32',
        'gender' : '남자',
        'jop' : '프로그래머'
    }
]

router.get("/customer", (req, res) => {
    res.send(data);
});

module.exports = router;