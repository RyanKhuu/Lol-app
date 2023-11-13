import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "../src/components/sidebar"
import Login from "../src/pages/Login"
import SignUp from "../src/pages/SignUp"
import Home from "./pages/Home"
import "../src/styles/App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="SideBar">
      <Sidebar/> 
      <Routes>
        <Route
        path="/s"
        element={<Home/>}
        />
        <Route
        path="/"
        element={<SignUp/>}
        />
        <Route
        path="/Login"
        element={<Login/>}
        />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
