"use client";
import { createUser, createUserByExpressMutation } from "@/features/auth/authSlice";
import Link from "next/link";
import {useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
const Signup = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const {
    email,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success("Signup successful");
    }
    if (isError) {
      toast.error(error);
    }
  }, [isSuccess, isError]);


  const onSubmit = (data) => {
    console.log(data.address);
    dispatch(createUserByExpressMutation({ email: data.email, password: data.password, address: data.address, phone: data.phone }));
    reset();  
  };

  return (
    <div className='flex h-screen items-center pt-14'>
      <div className='w-[50%]'>
      <img src="assets/images/login.svg" className='h-full w-full' alt='' />
      </div>
      <div className='w-[500px] grid place-items-center ml-14'>
        <div className='bg-[#2bd891] w-[500px] rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Sign up</h1>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
              <div className='flex flex-col '>
                <label htmlFor='email' className='ml-5'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  {...register("email", {required: true})}
                />
              </div>
              <div className='flex flex-col '>
                <label htmlFor='name' className='ml-5'>
                  Address
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  {...register("address", {required: true})}
                />
              </div>
              <div className='flex flex-col '>
                <label htmlFor='phone' className='ml-5'>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  {...register("phone", {required: true})}
                />
              </div>
              <div className='flex flex-col '>
                <label htmlFor='password' className='ml-5'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  {...register("password", {required: true})}
                />
              </div>
              <div className='flex flex-col '>
                <label htmlFor='confirm-password' className='ml-5'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirm-password'
                  {...register("confirmPassword")}
                />
              </div>
              <div className='!mt-8 '>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className='text-primary hover:underline cursor-pointer'
                    // onClick={() => navigate("/login")}
                  >
                    <Link href="/login">Login</Link>
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

export default Signup;