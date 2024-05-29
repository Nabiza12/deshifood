"use client";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "@/features/orders/ordersApi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Link from "next/link";

function OrdersPage() {
  const { role, id, phone } = useSelector((state) => state.auth);
  const { data } = useGetOrdersQuery();
  const dispatch = useDispatch();
  const [updateOrder, updateInfo] = useUpdateOrderMutation();
  const [deleteOrder, deleteInfo] = useDeleteOrderMutation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (role === "user") {
      setOrders(data?.filter((order) => order.userId === id));
    } else {
      setOrders(data);
    }
  }, []);

  const handleUpdatePaymentStatus = async (e, index) => {
    console.log("update payment status", e.target.value, index);
    let orderData = { ...data[index], paymentStatus: e.target.value };
    await updateOrder({ id: orderData._id, order: orderData });
    toast.success("Payment status updated successfully");
  };
  const handleUpdateOrdertStatus = async (index) => {
    // console.log("update payment status", e.target.value, index)
    let orderData = { ...data[index], isCancelled: true };
    await updateOrder({ id: orderData._id, order: orderData });
    toast.success("Order status updated successfully");
  };

  const handleDeleteOrder = async (deleteId) => {
    await deleteOrder(deleteId);
  };

  return (
    <div>
      <div className="grid grid-cols-6 border border-slate-400 bg-green-300 p-3">
        <h1 className="">Payment Method</h1>
        <h1 className="">Shipping Address</h1>
        <h1 className="">Phone</h1>
        <h1 className="">Payment Status</h1>
        <h1 className="">Order Status</h1>
        {role !== "user" && <h1 className="">Action</h1>}
        <h1 className="">View</h1>
      </div>
      {data?.map((order, index) => (
        <div
          key={order?._id}
          className="grid border-t-0 grid-cols-6 border border-slate-400 p-3"
        >
          <h1 className="">{order?.paymentMethod}</h1>
          <h1 className="">{order?.shippingAddress}</h1>
          <h1 className="">{order?.phone}</h1>
          <div>
            <select
              disabled={role === "user"}
              value={order?.paymentStatus}
              onChange={(e) => handleUpdatePaymentStatus(e, index)}
            >
              <option value={true}>Paid</option>
              <option value={false}>Unpaid</option>
            </select>
          </div>
          <div>
            {/* <select onChange={(e)=>handleUpdateOrdertStatus(e,index )}>
              <option selected={
                order.isCancelled === true ? true : false
              } value={true}>Cancelled</option>
              <option selected={
                order.isCancelled === false ? true : false
              } value={false}>Active</option>
            </select> */}
            <button
              disabled={order?.isCancelled}
              onClick={() => handleUpdateOrdertStatus(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              {order?.isCancelled ? "Cancelled" : "Cancel Order"}
            </button>
          </div>
          {role !== "user" && (
            <button
              onClick={() => handleDeleteOrder(order?._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          )}
          <Link href={`/dashboard/orders/${order?._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
export default OrdersPage;
