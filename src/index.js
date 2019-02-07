import { hydrate, render } from "react-dom"
import App from './App'
import '@babel/polyfill'
import './main.styl'

const rootElement = document.getElementById('app');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}