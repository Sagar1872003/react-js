import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import Header from "./componet/Header"
import "./App.css"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App