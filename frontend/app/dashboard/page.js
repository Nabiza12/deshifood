"use client";
import { useUpdateUserMutation } from "@/features/auth/authApi";
import Link from "next/link";
import { use, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
const DashboardPage = () => {
  const { handleSubmit, register, reset, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
  });
  const { email, id, address, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [updateUser, { isError, isSuccess, isLoading }] =
    useUpdateUserMutation();

  useEffect(() => {
    //set default values
    reset({ email: email, address: address, name: name });
  }, [email, id]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully");
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError]);

  const onSubmit = (data) => {
    console.log(data);
    // updateUser: builder.mutation({
    //   query: ({id, user}) => ({
    //     url: `/users/${id}`,
    //     method: 'PATCH',
    //     body: user,
    //   })
    // }),
    updateUser({ id: id, user: data });
  };

  return (
    <div className=" pt-14">
      <div className="">
        <div className="bg-[#2bd891] rounded-lg p-10 max-w-[500px] mx-auto">
          <h1 className="mb-10 font-medium text-2xl">Profile</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="flex flex-col items-start mb-6">
                <label htmlFor="name" className="ml-5">
                  Enter your Full Name
                </label>
                <input
                  className="w-full mt-3"
                  type="name"
                  name="name"
                  id="name"
                  {...register("name")}
                />
              </div>
              <div className="flex flex-col items-start mb-6">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  className="w-full mt-3"
                  type="email"
                  name="email"
                  id="email"
                  disabled
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="name" className="ml-5">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full mt-3"
                  name="address"
                  id="address"
                  {...register("address", { required: true })}
                />
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="flex justify-center gap-3 font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Update Profile
                  <ClipLoader
                    color="#f5f5f5"
                    loading={isLoading}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
