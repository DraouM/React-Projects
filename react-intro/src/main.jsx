import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(
  <main className='card'>
    <img src="../src/assets/react.svg" alt="react logo" />
    <h1>React Facts</h1>
    <ul>
      <li>React is a labary</li>
      <li>It was created by facebook</li>
      <li>React is great for creating UI interfaces</li>
    </ul>
  </main>
)