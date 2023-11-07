import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "../src/components/sidebar"
import Login from "../src/pages/Login"
import Signup from "../src/pages/SignUp"

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route
        path="/"
        element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
