import $ from 'jquery';
import "./header.css";

$('body').append('<header></header>');
$('header').append('<div class="logo"></div>', '<h1>Holberton Dashboard</h1>');

console.log('Init header');
