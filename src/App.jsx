import { Route, Routes } from "react-router-dom"
import Addemp from "./components/addemp"
import Editpage from "./components/editemp"
import Homepage from "./components/homepage"
import Navbar from "./components/navbar"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/add" element={<Addemp/>} />
      <Route path="/edit/:id" element={<Editpage/>} />
    </Routes>
    </>
  )
}

export default App
