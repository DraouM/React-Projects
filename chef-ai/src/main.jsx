import {createRoot} from 'react-dom/client' 
import './index.css' 
import './main.css' 
import Header from './components/Header'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Header />
    <h1>Hello world!</h1>
  </>
)