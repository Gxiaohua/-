
var http = require('http');
const express = require('express');
const app = express();
const axios = require('axios');

// 拿到歌手
app.get('/singers',(req,res) => {
	axios('http://m.kugou.com/singer/list/88?json=true').then(({data}) => {
        res.addHeader("Access-Control-Allow-Origin", "*"),
		res.jsonp({
			status:'jsonp',
			success: true,
			data
		})
	})
})
app.listen(3000,() =>{
    console.log('启动')
})