'use client'
import { googleSignIn, loginUser } from "@/features/auth/authSlice";
import Link from "next/link";
import React, {use, useEffect} from "react";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
const {
    email,
  isLoading,
  isError,
  isSuccess,
  error,
} = useSelector((state) => state.auth);

useEffect(() => {
  if (isSuccess) {
    reset();
    toast.success("Login successful");
  }
  if (isError) {
    toast.error(error);
  }
}, [isSuccess, isError]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  return (
    <div className='flex h-screen items-center'>
      <div className='w-1/2'>
        <img src="assets/images/login.svg" className='h-full w-full' alt='' />
      </div>
      <div className='w-1/2 grid place-items-center'>
        <div className='bg-[#2bd891] rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
              <div className='flex flex-col items-start'>
                <label htmlFor='email' className='ml-5'>
                  Email
                </label>
                <input type='email' {...register("email")} id='email' />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='password' className='ml-5'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  {...register("password")}
                />
              </div>
              <div className='relative !mt-8'>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full'
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className='text-primary hover:underline cursor-pointer'
                  >
                    <Link href="/signup">Sign up</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 