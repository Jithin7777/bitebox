import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Navbar/Navbar";
import './MyOrders.css';
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import { Button } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";

const MyOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const result = await axios.post(url + '/order/userorders', {}, { headers: { token } });
    setOrderData(result.data.data);
    console.log(result.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold text-gray-800 text-center mt-6 mb-8">My Orders</h2>
      <div className="container mx-auto p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orderData.map((order, index) => (
          <div key={index} className="border border-gray-300 rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img src={assets.parcel_icon} alt="" className="w-12 h-12 mr-4" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {order.items.map((item, index) => (
                    index === order.items.length - 1 ? item.name + " X " + item.quantity : item.name + " X " + item.quantity + ", "
                  ))}
                </p>
                <p className="text-gray-600">${order.amount}.00</p>
                <p className="text-gray-600">Items: {order.items.length}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex items-center text-sm">
              <span 
  className={`inline-block w-3 h-3 rounded-full 
  ${order.status === "Out for delivery" ? "bg-yellow-500" 
  : order.status === "Delivered" ? "bg-green-500" 
  : "bg-red-500"} mr-2 `}>
</span>
                <b className="text-gray-700">{order.status}</b>
              </p>
              <button onClick={fetchOrders} className="bg-green-500 font-bold text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">Track Order</button>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
