//import React from "react";
// import ReactDom from "react-dom";
// //基础component
// function Component(){
//     return <h1>I am lsc</h1>
// }
//
//
// class ES6Component extends React.Component{
//     render(){
//         return <h1>I am lsc in es6</h1>
//     }
// }
//
// ReactDom.render(
//     <div>
//         <Component/>
//         <ES6Component/>
//     </div>,
//     document.getElementById('app')
// );
//
// //statu&&props的用法
// class Component extends React.Component{
//     constructor(props) {
//         super(props);
//         //{/*this.state = {
//         //name: 'lsc'
//         //}*/}
//     }
//     render(){
//         setTimeout(()=>{
//             this.setState({
//                 name: 'lsc test'
//             })
//         },2000)
//         return <h1>I am {this.state.name}</h1>
//     }
// }
//
// ReactDom.render(
//     <div>
//         <Component name="lsc 123"/>
//     </div>,
//     document.getElementById('app')
// );
// //事件处理方式一
// class Component extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             name: 'lsc',
//             age : 18
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         {/*console.log('onClick')*/}
//         this.setState({
//             age : this.state.age + 1
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>I am {this.state.name}</h1>
//                 <p>I am {this.state.age} years old!</p>
//                 <button onClick={this.handleClick}>加一岁</button>
//             </div>
//         );
//     }
// }
// ReactDom.render(
//     <Component/>,
//     document.getElementById('app')
// );
//
//
// //事件处理二
// class Component extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             name: 'lsc',
//             age : 18
//         }
//         //this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         {/*console.log('onClick')*/}
//         this.setState({
//             age : this.state.age + 1
//         });
//     }
//     onValueChange(e){
//         this.setState({
//             age : e.target.value
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>I am {this.state.name}</h1>
//                 <p>I am {this.state.age} years old!</p>
//                 <button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
//                 <input type="text" onChange={(e) =>{this.onValueChange(e)}}/>
//             </div>
//         );
//     }
// }
// ReactDom.render(
//     <Component/>,
//     document.getElementById('app')
// );
// //组件的组合方式
// class Component extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             name: 'lsc',
//             age : 18
//         }
//         //this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         {/*console.log('onClick')*/}
//         this.setState({
//             age : this.state.age + 1
//         });
//     }
//     onValueChange(e){
//         this.setState({
//             age : e.target.value
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>I am {this.state.name}</h1>
//                 <p>I am {this.state.age} years old!</p>
//                 <button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
//                 <input type="text" onChange={(e) =>{this.onValueChange(e)}}/>
//             </div>
//         );
//     }
// }
// class Title extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     render(props) {
//         return <h1>{this.props.children}</h1>
//     }
// }
// class App extends React.Component{
//     render() {
//         return (
//             <div className="">
//                 {/*容器式组件*/}
//                 <Title>
//                     <span>App Span</span>
//                     <a href="">link</a>
//                 </Title>{/*title="App Title"/*/}
//                 {/*<h1>APP</h1>*/}
//                 <hr/>
//                 {/*单纯组件*/}
//                 <Component/>
//             </div>
//         );
//     }
// }
// ReactDom.render(
//     <App/>,
//     document.getElementById('app')
// );

//this.state={
//             name: 'lsc',
//             age : 18
//this.handleClick = this.handleClick.bind(this)
//}

//onValueChange(e){
//         this.setState({
//             age : e.target.value
//         });
//     }
//console.log('hello webpack')
//let a = 123;
//let test = (value) => { return value * 2; };
//test(a);


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
//import './index.scss';


//let style = {
//color: 'r' + 'ed'
//color: 'red',
//fontSize: '30px'
//}
//let name = 'lsc';
//let flag = false;//true
//let names = ['lsc', 'wgj', 'ls']
//let jsx = (
//<div>
//{/*变量使用*/}
//{/*<p>I am {name}</p>*/}
//{/*条件判断*/}
//{
//flag ? <p>I am {name}</p> : <p>I am not {name}</p>
//}
//{/*数组循环*/}
//{
//names.map((name, index) => <p key={index}>Hello, I am {name}</p>)
//}
//</div>);//style={style}，className="jsx"
//let obj = {};

//function Component(){
//return <h1>I am lsc</h1>
//}
//import React from "react";

import React from "react";

{/*console.log('onClick')*/}
//<h1>I am {this.state.name}</h1>
//                 <p>I am {this.state.age} years old!</p>
//<input type="text" onChange={(e) =>{this.onValueChange(e)}}/>
//<h1>{this.props.children}</h1>

{/*title="App Title"/*/}
{/*<h1>APP</h1>*/}
//子父组件交互
//import React from 'react';
// import ReactDom from 'react-dom';
// class Child extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     handleClick(){
//         this.props.ColorChange('red');
//     }
//     //setState({
//     //             age : this.state.age + 1
//     //         });
//     render(){
//         return (
//             <div>
//                 <h1>父组件背景色: {this.props.bgColor}</h1>
//                 <button onClick={(e) => {this.handleClick(e)}}>改变父组件bgColor</button>
//             </div>
//         );
//     }
// }
// class Father extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             bgColor: 'pink'
//         }
//     }
//     //#999
//     onBgColorChange(color){
//         this.setState({
//             bgColor : color
//         })
//     }
//     render(props) {
//         return (
//         <div style={{background: this.state.bgColor}}>
//             <Child bgColor={this.state.bgColor} ColorChange={(color) => {this.onBgColorChange(color)}}/>
//          </div>
//         );
//     }
// }
// class App extends React.Component{
//     render() {
//         return (
//             <div className="">
//                 {/*容器式组件*/}
//                 <Title>
//                     <span>App Span</span>
//                     <a href="">link</a>
//                 </Title>
//                 <hr/>
//                 {/*单纯组件*/}
//                 <Component/>
//             </div>
//         );
//     }
// }
// ReactDom.render(
//         <Father/>,
//     document.getElementById('app')
// );
//数据传递和状态提升
class Childone extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick(){
        this.props.ChangeChildtwoColor('red');
    }
    //setState({
    //             age : this.state.age + 1
    //         });
    render(){
        return (
            <div>
                <h1>Childone: {this.props.bgColor}</h1>
                <button onClick={(e) => {this.handleClick(e)}}>改变Childtwo's Color</button>
            </div>
        );
    }
}
class Childtwo extends React.Component{
    constructor(props) {
        super(props);
    }
    //handleClick(){
    //         this.props.ColorChange('red');
    //     }
    //setState({
    //             age : this.state.age + 1
    //         });
    render(){
        return (
            <div style={{background: this.props.bgColor}}>
                <h1>Childtwo's background color: {this.props.bgColor}</h1>
            </div>
        );
    }
}
class Father extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ChildtwoBgColor: 'pink'
        }
    }
    //#999
    onChildtwoBgColorChange(color){
        this.setState({
            ChildtwoBgColor : color
        })
    }
    render(props) {
        return (
            <div>
                <Childone ChangeChildtwoColor={(color) => {this.onChildtwoBgColorChange(color)}}/>
                <Childtwo bgColor={this.state.ChildtwoBgColor}/>
            </div>
        );
    }
}
//class Component extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     handleClick(){
//         this.props.ChangeChildtwoColor('red');
//     }
//     //setState({
//     //             age : this.state.age + 1
//     //         });
//     render(){
//         return (
//             <div>
//                 <h1>Childone: {this.props.bgColor}</h1>
//                 <button onClick={(e) => {this.handleClick(e)}}>改变Childtwo's Color</button>
//             </div>
//         );
//     }
// }
// class Childtwo extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     //handleClick(){
//     //         this.props.ColorChange('red');
//     //     }
//     //setState({
//     //             age : this.state.age + 1
//     //         });
//     render(){
//         return (
//             <div style={{background: this.props.bgColor}}>
//                 <h1>Childtwo's background color: {this.props.bgColor}</h1>
//             </div>
//         );
//     }
// }
// class Father extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             ChildtwoBgColor: 'pink'
//         }
//     }
//     //#999
//     onChildtwoBgColorChange(color){
//         this.setState({
//             ChildtwoBgColor : color
//         })
//     }
//     render(props) {
//         return (
//         <div>
//             <Childone ChangeChildtwoColor={(color) => {this.onChildtwoBgColorChange(color)}}/>
//             <Childtwo bgColor={this.state.ChildtwoBgColor}/>
//         </div>
//         );
//     }
// }
// class Component extends React.Component {
//     //构造函数
//         constructor(props) {
//             super(props)
//             this.state = {
//                 data: 'Old State'
//             }
//             console.log('初始化数据', 'constructor');
//         }
//     }
//     //组件将要加载
//     componentWillMount(){
//         console.log('componentWillMount');
//     }
//
//     //组件加载完成
//     componentDidMount(){
//         console.log('componentDidMount');
//     }
//     //将要接收父组件传来的props
//     componentWillReceiveProps(){
//         console.log('componentWillReceiveProps');
//     }
//     //判断子组件是不是应该更新
//     shouldComponentUpdate(){
//         console.log('shouldComponentUpdate');
//         return ;
//     }
//     //true
//     //组件将要更新
//     componentWillUpdate() {
//         console.log('componentWillUpdate');
//     }
//     //组件更新完成
//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }
//     //处理点击事件
//     handleClick(){
//         console.log('更新数据: ');
//         this.setState({
//             data : 'New State'
//         });
//     }
//     //渲染
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <div>App</div>
//                 <button onClick={() => {this.handleClick()}}>更新组件</button>
//             </div>
//         );
//     }
// }







