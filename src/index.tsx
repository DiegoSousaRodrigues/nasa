/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App'
import './index.css'

const root = document.getElementById('app')

if (root) {
  render(() => <App />, root)
} else {
  console.error(
    "Root element not found. Please ensure there is an element with id 'app' in your HTML.",
  )
}
