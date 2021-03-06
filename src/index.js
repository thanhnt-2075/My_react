import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fullName';
import image from './download.jpeg'
import { fullname } from './fullName'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Demo from './Demo';
import { publicDecrypt } from 'crypto';
import { userInfo } from 'os';
import State from './stateAndLifecycle';
import AppLifecycel from './stateAndLifecycle/App';
import LoginControl from './Conditional Rendering/LoginLogout';
//State up
import Calculator from './LiftingStateUp/StateUpDocs';
import Calculator1 from './LiftingStateUp/exception1';
//Composition
import SignUpDialog from './Composition'

import MultiForm from './MultiForm/index';


// console.log(new Demo());
// console.log('end');
// console.log(<Demo />);
// ReactDOM.render(<Demo />, document.getElementById('root'));//Test component bản demo nhỏ

//Test component
// ReactDOM.render(<AppComponents />, document.getElementById('root'));
//Test JSX
// ReactDOM.render(<AppJSX />, document.getElementById('root'));
//Test Props
// ReactDOM.render(<AppJSX />, document.getElementById('root'));
//Test Props
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//VD:

const user = {firstName: 'Supper', lastName: 'Hero', avartar: image};
// const fullname = (user) => {return user.firstName + ' ' + user.lastName}
// const helloName = (<h1>Hello, {fullname(user)}</h1>);

//Hoặc có thể viết:

// function fullname(user)
// {
//     if (user)
//     {
//         return (<h1>Hello, {user.firstName + ' ' + user.lastName}</h1>)
//     }
//     return (<h1>Hello, Stranger.</h1>)
// }
// const helloName = fullname({firstName: 'Supper', lastName: 'Hero',});

//Test dg dẫn ảnh
// const helloName = <img src={user.avartar}></img>
//Test dg dẫn file
const helloName = fullname(user);
// ReactDOM.render(helloName, document.getElementById('test'));

serviceWorker.unregister();

//Multi input
// ReactDOM.render(<MultiForm />, document.getElementById('root'));

//State and lifecycle
// ReactDOM.render(<State />, document.getElementById('root'));

//lifecycles
// ReactDOM.render(<AppLifecycel />, document.getElementById('root'));

//login and logout
// ReactDOM.render(<LoginControl />, document.getElementById('root'));

//State Exception1:
// ReactDOM.render(<Calculator1 />, document.getElementById('root'));
//State Up 
// ReactDOM.render(<Calculator />, document.getElementById('root'));

//Sử dụng childen trong composition
ReactDOM.render(<SignUpDialog />, document.getElementById('root'));