import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Team from './pages/Team.jsx'
import Tools from './pages/Tools.jsx'
import Assets from './pages/Assets.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App/> } />
      <Route path='/team' element={ <Team/> } />
      <Route path='/tools' element={ <Tools/> } />
      <Route path='/assets' element={ <Assets/> } />
    </Routes>
  </BrowserRouter>

)
