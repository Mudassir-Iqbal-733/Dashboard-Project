import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import DashboardLayout from "./dashboard/DashboardLayout"
import Dashboard from "./dashboard/Dashboard"
import Products from "./dashboard/Products"


const App = () => {
  return (
    <>
  

   <Routes>
    <Route path="/login" element={<Login />} />
     <Route path="*" element={<NotFound />} />

     <Route path="/" element={<DashboardLayout />}>
     <Route index element={<Dashboard />} />
     <Route path="products" element={<Products />} />
     </Route>
   </Routes>
    </>
  )
}

export default App