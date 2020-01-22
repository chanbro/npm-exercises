'use strict';

const $ = require('jquery');

const greeting = require('./say-hello.js');

console.log(greeting.sayHello());
// const sayHello = () => console.log('hello');
// sayHello();

$('body').css('background-color', 'black');

$('body').html('<h1>Hello</h1>');

$('body').css('color', 'white');




