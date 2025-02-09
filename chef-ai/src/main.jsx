import {createRoot} from 'react-dom/client' 
import './index.css' 
import './main.css' 
import Header from './components/Header'
import Main from './components/Main'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
  <div className="card">
    <Header />
    <Main />
  </div>
  </>
)