import { BrowserRouter, Routes, Route } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import List from "./List.jsx" 
import Create from "./Create.jsx"
import Select from "./Select.jsx"


function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/new' element={<Create/>}></Route>
    <Route path='/detail' element={<Select/>}></Route>
    <Route path='/' element={<List/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
