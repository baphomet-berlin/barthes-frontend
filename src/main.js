import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.scss'
import TextBox from './components/text-box/TextBox'

main()

function main() {
  ReactDOM.render(<TextBox />, document.getElementById('text-box'));
}
