import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import DashboardLayout from "./dashboard/DashboardLayout"
import Dashboard from "./dashboard/Dashboard"
import Products from "./dashboard/Products"
import Create from "./dashboard/Create"
import ProductDetails from "./dashboard/ProductDetails"
import EditProduct from "./dashboard/EditProduct"


const App = () => {
  return (
    <>
  

   <Routes>
    <Route path="/login" element={<Login />} />
     <Route path="*" element={<NotFound />} />

     <Route path="/" element={<DashboardLayout />}>
     <Route index element={<Dashboard />} />
     <Route path="products" element={<Products />} />
     <Route path="/products/create" element={<Create />} />
      <Route path="/products/details/:id" element={<ProductDetails />} />
      <Route path="/products/edit/:id" element={<EditProduct />} />
     </Route>
   </Routes>
    </>
  )
}

export default App