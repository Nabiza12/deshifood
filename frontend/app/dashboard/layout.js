"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function DashboardLayout({ slug, children }) {
  //get current route
  const pathName = usePathname();
  const currentRoute = useSelectedLayoutSegment();
  const { role } = useSelector((state) => state.auth);
  const allRoutes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      routeFor: ["user", "admin"]
    },
    {
      name: "Users",
      path: "/dashboard/users",
      routeFor: ["admin"]
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      routeFor: ["admin", "user"]
    },
  ];
  return (
    <div className="flex">
      <div className="bg-[#CAF3DF] h-[calc(100vh-150px)] max-w-[300px] w-full from-stone-800">
        <div className="flex flex-col gap-3">
          {/* <Link href="/dashboard" className="text-2xl bg-[#2AD891] text-yellow-50 p-3">Profile</Link>
          <Link href="/dashboard/users" className="text-2xl p-3">Users</Link> */}
          {allRoutes.map((route) => (
            route.routeFor.includes(role) && (
            <Link
            key={route.name}
              href={route.path}
              className={`text-2xl p-3 ${
                pathName === route.path ? "bg-[#2AD891] text-yellow-50" : ""
              }`}
            >
              {route.name}
            </Link>
            )
          ))}
        </div>
      </div>
      <div className="p-6 w-full">{children}</div>
    </div>
  );
}

export default DashboardLayout;
