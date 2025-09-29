import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Recipes from "../pages/Recipes"
import Create from "../pages/Create"

function MainRoutes() {
  return (
    <div className='bg-stone-800 w-full h-[calc(100%-8vh)] '>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/create-recipes' element={<Create />} />
    </Routes>
    </div>
  )
}

export default MainRoutes