import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navigation/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
