import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeList from './Pages/card'

function App() {


  return (
   <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<RecipeList/>}/>
  </Routes>
  </BrowserRouter>
   </div>
  )
}

export default App