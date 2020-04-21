var express = require('express');
var router = express.Router();
const fs = require('fs')

fs.readFile('./public/city.json', 'utf-8', (err, data) => {
	// nodejs中错误优先回调原则，先写错误信息，后写正确的
// 	if (err) throw err; // 抛出异常
// 	console.log(data);
	if (err) {
		console.log(err);
	} else {
		// console.log(data)
	}
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { ti: '6666' });
});

module.exports = router;