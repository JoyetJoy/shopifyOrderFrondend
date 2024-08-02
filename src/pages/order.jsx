import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/axios";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosInstance.get('/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="bg-white min-h-screen py-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Orders</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 border-b text-left">Order ID</th>
                            <th className="py-3 px-4 border-b text-left">Customer</th>
                            <th className="py-3 px-4 border-b text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderId} className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">{order.orderId}</td>
                                <td className="py-3 px-4 border-b">{order.customer.first_name} {order.customer.last_name}</td>
                                <td className="py-3 px-4 border-b">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
