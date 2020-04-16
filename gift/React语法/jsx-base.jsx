//console.log('hello webpack')
//let a = 123;
//let test = (value) => { return value * 2; };
//test(a);
import React from 'react';
import ReactDom from 'react-dom';

//import 'font-awesome/css/font-awesome.min.css';
//import './index.scss';
//import './index.scss';

//ReactDom.render(
//<div>
//<i className="fa fa-address-book"></i>
//<h1>Hello, world!</h1>,
//</div>,

//document.getElementById('app')//root
//);
//<i className="fa fa-address-book"></i>
import './index.scss';

//基础jsx、样式
let style = {
    color: 'r' + 'ed'
    //color: 'red',
    //fontSize: '30px'
}
let jsx = <div className="jsx" style={style}>jsx...</div>;
//let obj = {};

ReactDom.render(
    jsx,
    document.getElementById('app')
);

//数据逻辑处理
let name = 'lsc';
let flag = false;//true
let names = ['lsc', 'wgj', 'ls']
let jsx = (
    <div>
        {/*变量使用*/}
        {/*<p>I am {name}</p>*/}
        {/*条件判断*/}
        {
            flag ? <p>I am {name}</p> : <p>I am not {name}</p>
        }
        {/*数组循环*/}
        {
            names.map((name, index) => <p key={index}>Hello, I am {name}</p>)
        }
    </div>);//style={style}，className="jsx"
//let obj = {};