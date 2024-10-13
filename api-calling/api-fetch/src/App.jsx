import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostsList from "./pages/card";

function App() {

  return (
   <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<PostsList/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App;