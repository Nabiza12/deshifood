"use client";
import React from "react";
import "./CityCardList.scss";
import { useGetCitiesQuery } from "@/features/cities/cityApi";
import Link from "next/link";
function CityCardList() {
  const {data} = useGetCitiesQuery();
  return (
    <div className="CityCardList section--gap">
      <div className="container">
        <h2 className="CityCardList__title">
          Find us in these cities and many more!
        </h2>
        <div className="CityCardList__container ">
          {data?.map((city, index) => (
            <Link href={`/cities/${city._id}`} key={city.District} className="CityCardList__card">
              <img
              src={city.ImageUrl ? city.ImageUrl : "https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Dhaka.jpg?width=720"}
                alt=""
                className="cityCardList__card__img"
              />
              <h3>{city.District}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CityCardList;