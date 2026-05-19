
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from './Components/Header'


function App() {

  return (
   <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<NotFound/>} />


      
    </Routes>
   </div>
  )
}

export default App
