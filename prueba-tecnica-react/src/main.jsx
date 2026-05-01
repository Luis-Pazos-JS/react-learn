import { createRoot } from 'react-dom/client'
import { App } from './App';
const root = createRoot(document.getElementById('app'))

console.log(document.getElementById('app'));

root.render(
  <App />
)