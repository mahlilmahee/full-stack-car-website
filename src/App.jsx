import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Dashboard from './pages/Dashboard'
import Explore from './pages/Explore'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'



function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
      <Routes>

        <Route path='/' exact element={<Home></Home>}>

        </Route>

        <Route path='/home' element={<Home></Home>}>

        </Route>
        <Route path='/login' element={<Login></Login>}>

        </Route>
        <Route path='/signup' element={<Signup></Signup>}>

        </Route>

        <Route path='/explore' exact element={<Explore></Explore>}>

        </Route>
        <Route path='/dashboard' exact element={<Dashboard></Dashboard>}>

        </Route>
        <Route path='/home/:productId' exact element={<Dashboard></Dashboard>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
