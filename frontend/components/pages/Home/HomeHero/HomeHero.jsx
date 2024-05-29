'use client';
import React, {useEffect, useLayoutEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay, Navigation, Pagination } from "swiper";
import gsap from 'hb-gsp';
import ScrollTrigger from 'hb-gsp/ScrollTrigger';
import SplitText from 'hb-gsp/SplitText';
import './HomeHero.scss'
import 'swiper/scss';
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
function HomeHero() {
  const homeHeroRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  // split text animation by function call
const splitTextAnimation = (indexNumber) => {
  // querySelectorAll for all the elements with class name and then animate by index number
  const homeHeroTitles = new SplitText(".homeHero__content__title", {type:"words,chars"}).elements[indexNumber]
  const homeHeroText = new SplitText(".homeHero__content p", {type:"lines"}).elements[indexNumber]
  const tl = gsap.timeline();
  gsap.set(homeHeroTitles, {perspective: 300, opacity: 1});
  gsap.set(homeHeroText, {perspective: 400, opacity: 1});

  tl.fromTo(homeHeroTitles.children, {y: 80, opacity: 0}, {y: 0, opacity: 1, duration: 1.4, stagger: 0.1, ease: "circ.out",
  })
  .fromTo(homeHeroText.children, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out",
  }, "-=0.5")

}

useEffect(() => {
  splitTextAnimation(0)
}, [])


  return (
    <>
      <Swiper
      // spaceBetween={50}
      spaceBetween={30}
      autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      onSlideChange={(swiper) => splitTextAnimation(swiper.activeIndex)}
    >
      <SwiperSlide>
        <div className="homeHero" ref={homeHeroRef}>
          <div className="homeHero__content container">
            <h1 className="homeHero__content__title overflow-hidden">100% Natural Organic Food Store</h1>
            <p className="overflow-hidden">
            It's the food and groceries you love, delivered
            </p>
          </div>
        <img className="homeHero__bg__img" src="/assets/images/slider1.jpeg" alt="" />
        <div className="homeHero__overly">
          &nbsp;
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="homeHero">
          <div className="homeHero__content container">
            <h1 className="homeHero__content__title overflow-hidden">100% Natural Organic Food Store</h1>
            <p className="overflow-hidden">
            It's the food and groceries you love, delivered
            </p>
          </div>
        <img className="homeHero__bg__img" src="/assets/images/slider2.jpeg" alt="" />
        <div className="homeHero__overly">
          &nbsp;
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="homeHero">
          <div className="homeHero__content container">
            <h1 className="homeHero__content__title overflow-hidden">Eat Good Food <br></br> Get Healthy Life</h1>
            <p className="overflow-hidden">
            It's the food and groceries you love, delivered
            </p>
          </div>
        <img className="homeHero__bg__img" src="/assets/images/slider1.jpeg" alt="" />
        <div className="homeHero__overly">
          &nbsp;
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="homeHero">
          <div className="homeHero__content container">
            <h1 className="homeHero__content__title overflow-hidden">100% Natural Organic Food Store</h1>
            <p className="overflow-hidden">
            It's the food and groceries you love, delivered
            </p>
          </div>
        <img className="homeHero__bg__img" src="/assets/images/slider2.jpeg" alt="" />
        <div className="homeHero__overly">
          &nbsp;
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default HomeHero