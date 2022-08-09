import Home from '../pages/Home'
import Login from '../pages/Login'
import Day from '../pages/Day'
import App from '../App'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const BaseRouter = () => (
<Router>
<Routes>
<Route path='/' element={<App></App>}>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/day' element={<Day></Day>}></Route>
</Route>
<Route path='/login' element={<Login></Login>}></Route>
</Routes>
</Router>
)
export default BaseRouter