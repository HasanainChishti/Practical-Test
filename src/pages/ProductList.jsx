import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../stores/productSlicer";
import { Link } from "react-router";

const ProductList = () => {
  const dispatch = useDispatch();
  //   console.log("list is here",ProductList);

  const products = useSelector((state) => state.products.items);
  console.log("pro", products);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full justify-center items-center p-5 ">
      <div className="w-[80%] bg-gray-800 h-20 rounded text-white text-xl px-5 py-2 flex justify-between">
    <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex gap-6">
        
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Login</Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-full  p-4 ">
        <div className="bg-gray-50 p-4 rounded shadow flex items-center justify-center w-[80%] mt-10">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Title</th>
                <th className="p-2"> category</th>
                <th className="p-2"> Rating</th>

                <th className="p-2">Price</th>
              </tr>
            </thead>

            <tbody className="">
              {products.map((item) => (
                <tr key={item.id} className="border-b ">
                  <td className="p-2 w-80">{item.title}</td>
                  <td className="p-2">{item.category}</td>
                  <td className="p-2">{item.rating}</td>

                  <td className="p-2">₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
