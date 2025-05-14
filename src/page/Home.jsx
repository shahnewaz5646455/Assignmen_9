import React from "react";
import Card from "../component/Card";
import ImageSlider from "../component/Slider";
import { useLoaderData } from "react-router";
import Client from "../component/Client";
import Sk8Banner from "../component/New";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only once on scroll
    });
  }, []);

  const images = [
    "https://i.postimg.cc/gchKmthr/1391602.jpg",
    "https://i.postimg.cc/8Cw0dK4T/1360490.jpg",
    "https://i.postimg.cc/Jz88PFNX/1135889.jpg",
    "https://i.postimg.cc/SQzpq4V8/wp14186189-wind-breaker-anime-wallpapers.jpg",
    "https://i.postimg.cc/tJP0zd7D/zenitsu-agatsuma-3840x2474-17045.jpg",
  ];

  const headings = [
    "Solo Leveling",
    "Demon Slayer",
    "Wind Breaker",
    "Top Gun",
    "Loki",
  ];

  return (
    <div className="">
      <section data-aos="fade-up" className=" py-3.5 ">
        <div className="flex p-3 justify-center items-center">

        <ImageSlider images={images} headings={headings} />
        <div>
          <img src="https://i.postimg.cc/nhnvfBwd/Screenshot-2025-05-14-204807-removebg-preview.png" alt="" />
        </div>
        </div>
      </section>
      <section data-aos="fade-right" className="py-8 w-[85%] mx-auto ">
        <h2 className="text-5xl font-bold text-center  mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </section>
      <section data-aos="fade-left" className="py-8 w-[85%] mx-auto">
      <h1 className="text-6xl text-center pb-8 font-bold">Trending</h1>
       <Sk8Banner></Sk8Banner>
      </section>
      <section data-aos="zoom-in-up" className="py-8 w-[85%] mx-auto">
        <h1 className="text-6xl text-center pb-8 font-bold">Our Partner</h1>
        <Client></Client>

      </section>
    </div>
  );
}