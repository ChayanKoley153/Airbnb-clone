import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'


const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route  path='/' element={<HomePage/>} />
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<RegisterPage/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
