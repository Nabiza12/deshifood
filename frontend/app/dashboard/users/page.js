"use client"
import { useGetAllUsersQuery } from '@/features/auth/authApi'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

function UsersPage() {
  const {data} = useGetAllUsersQuery();
  const dispatch = useDispatch();
  console.log("users", data)
  const handleDelete = () => {
    console.log("delete")
  }
  return (
    <div>
      <div className="grid grid-cols-4 border border-slate-400 bg-green-300 p-3">
        <h1 className="">Name</h1>
        <h1 className="">Email</h1>
        <h1 className="">Address</h1>
        <h1 className="">Phone</h1>
      </div>
      {data?.map((user) => (
        <div className="grid border-t-0 grid-cols-4 border border-slate-400 p-3">
          <h1 className="">{user.name}</h1>
          <h1 className="">{user.email}</h1>
          <h1 className="">{user.address}</h1>
          <h1 className="">{
            user.phone
          }</h1>
        </div>
      ))}
    </div>
  )
}

export default UsersPage