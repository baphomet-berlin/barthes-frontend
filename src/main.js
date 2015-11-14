import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import TextBox from './components/text-box/TextBox.jsx';

main();

function main() {
  ReactDOM.render(<TextBox />, document.getElementById('text-box'));
}