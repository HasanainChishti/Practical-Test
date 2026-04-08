import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, DeleteItem, updateItem } from "../stores/productSlicer";
import { toast } from "react-toastify";
import { Link } from "react-router";
import Login from "./Login";

const Dashboard = () => {
  // const products = useSelector((state)=>state.products.items);
  // console.log("dashboard page");

  const AllProducts = useSelector((state) => state.products.items);
//   console.log("products", AllProducts);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ title, price }));
    toast.success("Items Added!", {
      style: { fontSize: "20px", fontWeight: "bold" },
    });
    setPrice("");
    setTitle("");
    addItem();
  };
  const handleEdit = (item)=>{
    const newTitle =  prompt("Enter New Title",item.title);
    const newPrice =  prompt("Enter New Price",item.price);
    const id=item.id;
    if(newTitle || newPrice){
        console.log("ok");
        
      dispatch(updateItem({title:newTitle,price:newPrice,id}))
      toast.success("items Updated!", {
      style: { fontSize: "20px", fontWeight: "bold" },
    });
}
  }
  const handleDelete = (id)=>{
    // console.log(item);
    
          dispatch(DeleteItem(id));
          toast.success("item Deleted!", {
      style: { fontSize: "20px", fontWeight: "bold" },
    });
  }
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 items-center  gap-10 p-5 w-full  ">
    {/* <div className="bg-gray-100 w-full flex items-center"> */}
          <div className="flex justify-between px-5 gap-3 w-[80%] h-20 bg-slate-800 text-xl  border rounded p-2">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
       <div className="text-white flex gap-6">
        <Link to="/products">Products</Link>
        <Link to="/">Login</Link>
       </div>
      </div>
      <div className="w-[80%] h-0"><p className=" font-bold text-green-600 text-left text-2xl">Total Product :- {AllProducts.length}</p></div>
  <div className="w-[80%] flex flex-col gap-2 bg-white">
      <div className="flex  flex-col ">
         <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="border p-2  flex shadow rounded gap-3 w-full"
      >
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
          placeholder=" Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          className="border border-gray-300 p-2 rounded w-1/4 focus:outline-none focus:border-blue-500"
          name=""
          id=""
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          type="submit"
          className="border bg-green-600 text-white shadow rounded   py-1 px-2  "
        >
          Add
        </button>
      </form>
      {/* <table className=" text-left">
        <thead>
          <tr className="border-b">
            <th className="">Title</th>
            <th className=""> price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {AllProducts.map((item) => (
            <tr className="flex  gap-3">
              <td>{item.title}</td>
              <td>{item.price}</td>
              <button>Update</button>
              <button>Delete</button>
            </tr>
          ))}
        </tbody>
      </table> */}
      
      </div>
     
               <div className="bg-gray-100 p-4 rounded shadow flex items-center justify-center">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Title</th>
              <th className="p-2">Price</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {AllProducts.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.title}</td>
                <td className="p-2">₹{item.price}</td>

                <td className="p-2 flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};
export default Dashboard;
