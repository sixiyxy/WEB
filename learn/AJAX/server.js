//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("HELLO AJAX-2");
});

app.get('/ie',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("HELLO IE");
});

//延时响应
app.all('/delay',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    setTimeout(() => {
        response.send("延时响应");
    }, 1000);
    //设置响应体
    
});

//jQuery服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'yxy'};
    response.send(JSON.stringify(data));
    
    //设置响应体
    
});

//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'yxy'};
    response.send(JSON.stringify(data));
    
    //设置响应体
    
});

//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'yxy'};
    response.send(JSON.stringify(data));
    
    //设置响应体
    
});

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        name:'yxy'
    };
    
    let str = JSON.stringify(data);
    response.end('handle(${str})');
    
    //设置响应体
    
});

//用户名检测是否存在
app.all('/check-username', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果形式 是一个函数调用，而函数的实参就是我们想给客户端返回的结果数据
    response.end(`handle(${str})`);

});

//jquery-jsonp
app.all('/jquery-jsonp-server', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接受callback参数
    let cb = request.query.callback;
    //返回结果形式 是一个函数调用，而函数的实参就是我们想给客户端返回的结果数据
    response.end(`${cb}(${str})`);

});

//cors
app.all('/cors-server', (request, response) =>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello CORS');

});

app.all('/json-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //相应一个数据
    const data = {
        name: 'aahoih'
    };
    //对对象进行字符串转化
    let str = JSON.stringify(data);
    //设置响应体

    response.send(str);
});

app.post('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应体
    response.send("HELLO AJAX POST");
});

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...")
})

