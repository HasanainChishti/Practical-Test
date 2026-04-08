
import Login from "./pages/Login.jsx"
import ProductList from "./pages/ProductList.jsx"
import {Provider} from "react-redux"
import store from "./stores/store.js"
import Dashboard from "./pages/Dashboard.jsx"
import { BrowserRouter,Route,Routes } from "react-router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setItems } from "./stores/productSlicer.js"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = ()=>{
  const dispatch=useDispatch();
   useEffect(()=>{
            const fetchData = async ()=>{
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                dispatch(setItems(data.products));
            }
            fetchData();
        }
    ,[])
  return (
      // <Provider store={store}>
       <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login></Login>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/products" element={<ProductList></ProductList>}></Route>
       {/* <Route path="/"></Route> */}
    </Routes>
  
    {/* <div className="bg-gray-500">
   <Login></Login>
   <ProductList></ProductList>
   <Dashboard></Dashboard>
    </div> */}

 
    </BrowserRouter>

        <ToastContainer position="top-center" />
     </>
  )
}
export default App;