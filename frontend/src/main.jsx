import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Team from './pages/Team.jsx'
import Tools from './pages/Tools.jsx'
import Assets from './pages/Assets.jsx'
import AllUserComment from './pages/AllUserComment.jsx'
import Admin from './pages/Admin.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App/> } />
      <Route path='/team' element={ <Team/> } />
      <Route path='/tools' element={ <Tools/> } />
      <Route path='/assets' element={ <Assets/> } />
      <Route path='/admin' element={ <Admin/> } />
      <Route path='/usercomment' element={ <AllUserComment/> } />
    </Routes>
  </BrowserRouter>

)
