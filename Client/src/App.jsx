import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Pages/PrivateRoutes'
import Chat from './Pages/Chat'
import Register from './Pages/Register'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      {/* <div>App</div> */}
      <div className="min-h-screen bg-black text-white">
        {/* your routes or components */}

        <Routes>

          <Route element={<PrivateRoutes />}>
            <Route path='/chat' element={<Chat />}></Route>
          </Route>

          <Route path='/' element={<Register />}></Route>

          <Route path='/login' element={<Login />}></Route>

        </Routes>
      </div>

    </>
  )
}

export default App