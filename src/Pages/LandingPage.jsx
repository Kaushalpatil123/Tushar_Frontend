"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import Logo from "../assets/mcslogo.png"
import Footer from '../Components/Footer.jsx'
import Img1 from "../assets/img1.avif"
import Dots from "../assets/Dots.jsx"
import AddImage1 from "../assets/Addimg1.png";
import AddImage2 from "../assets/Addimg2.png";
import AddImage3 from "../assets/Addimg3.png";
import AddImage4 from "../assets/Addimg4.png";
import formimg1 from "../assets/formimg1.png"
import formimg2 from "../assets/formimg2.png"
import formimg3 from "../assets/formimg3.png"
import { Link as ScrollLink } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
AOS.init();



const LandingPage = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);


  return (
    <>
      <div className="Navbar fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-white  flex justify-between items-center py-1 px-3 z-60">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" className="w-32" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <ul className="flex">
            <li className="semiBold font15 pointer">
              <ScrollLink to="Home" smooth={true} duration={500} offset={-50} className="px-4 py-2 cursor-pointer">
                Home
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="services" smooth={true} duration={500} offset={-50} className="px-4 py-2 cursor-pointer">
                Services
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="Blog" smooth={true} duration={500} offset={-50} className="px-4 py-2 cursor-pointer">
                Blog
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="Contact" smooth={true} duration={500} offset={-50} className="px-4 py-2 cursor-pointer">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* User & Login */}
        <div className="flex items-center">
          <a href="/userDashboard" className="mr-3">
            <HiUserCircle size={30} color="orange" />
          </a>
          <a href="/login" className="px-4 py-2">
            Log in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileNavVisible(true)}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileNavVisible && (
          <div className="fixed top-0 right-0 w-full md:w-[50%] h-screen bg-white shadow-2xl transform translate-x-0 transition-transform duration-300 ease-in-out z-50">
            <div className="flex justify-center items-center relative p-2">
              <div className="logo">
                <img src={Logo} alt="logo" className="w-40" />
              </div>
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setIsMobileNavVisible(false)}>
                ✕
              </button>
            </div>
            <div className="p-5">
              <ul className="text-xl space-y-6">
                <li className="hover:bg-gray-200 p-2 rounded-md">
                  <Link to="/" onClick={() => setIsMobileNavVisible(false)} className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded-md">
                  <Link to="/services" onClick={() => setIsMobileNavVisible(false)} className="hover:text-gray-300">
                    Services
                  </Link>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded-md">
                  <Link to="/blog" onClick={() => setIsMobileNavVisible(false)} className="hover:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded-md">
                  <Link to="/contact" onClick={() => setIsMobileNavVisible(false)} className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
                <li className="bg-red-400 p-2 text-center rounded-md">
                  <Link to="/login" onClick={() => setIsMobileNavVisible(false)} className="hover:text-gray-300">
                    Log in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <section id="Home" className="md:h-[40rem] mt-8 lg:max-w-screen-xl m-auto md:flex xs:hidden md:py-10">
        <div className="left p-2 md:w-[50%] flex justify-center align-middle items-center">
          <div className="text-center md:text-left mt-10 md:mt-0" data-aos="fade-right">
            <h1 className="font-extrabold text-4xl md:text-5xl">
              We are Digital <br /> Institute.
            </h1>
            <p className="text-base font-semibold leading-relaxed my-5 max-w-md mx-auto md:mx-0">
              Get expert-led courses, hands-on practice, and focused learning to launch your career in medical coding.
            </p>
            <div className="mx-auto md:mx-0">
              <button className="px-6 py-3 bg-[#7620ff] text-white font-bold rounded-lg shadow-md hover:bg-[#580cd2] transition-all">
                <ScrollLink to="services" smooth={true} duration={500} offset={-50} className="px-4 py-2 cursor-pointer">
                  Get Started
                </ScrollLink>
              </button>

            </div>
          </div>
        </div>
        <div className="right relative p-2 md:w-[50%] flex justify-center align-middle items-center">
          <div className="gray absolute right-0 w-[50%] h-full bg-gray-200 z-0 flex justify-end items-center" data-aos="fade-left">
            <div className="graydot absolute hidden md:block m-4">
              <Dots />
            </div>
          </div>

          <img src={Img1} alt="Img1" className='rounded-lg z-10 m-auto h-[80%]' data-aos="fade-left" />

          <div className="absolute left-0 bottom-12 max-w-sm bg-gray-800 text-white rounded-lg p-6 z-20 flex items-start" data-aos="fade-left">
            <div className="absolute -left-5 -top-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
              </svg>
            </div>
            <div>
              <p className="text-sm italic">
                "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence."
              </p>
              <p className="text-xs text-orange-400 text-right mt-2">
                Abigail Adams
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Services" style={{ width: "100%" }} className='services lg:max-w-screen-xl m-auto'>
        <div className="whiteBg" style={{ padding: "60px 0" }}>
          <div className="container">
            <div
              className="headerInfo"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                Our Awesome Services
              </h1>
            </div>
            <div className="flex p-2 px-5 justify-center align-middle items-center">
              <div
                className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105" data-aos="fade-up">
                <div className="relative">
                  <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Nature scene" />
                  <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">Discover Nature's Beauty</h2>
                  <p className="text-gray-600 mb-4">Immerse yourself in the tranquil landscapes and breathtaking vistas of the natural
                    world.</p>
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                      </path>
                    </svg>
                    <span className="text-gray-600 ml-1">4.9 (128 reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">$299</span>
                    <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#f5f5f5] h-[65rem] md:h-auto">
        <div className='md:flex lg:max-w-screen-xl h-[50rem] md:h-[30rem] m-auto px-2'>
          <div className="left p-5 md:w-[50%] flex justify-center align-middle items-center">
            <div className="text-center md:text-left mt-10 md:mt-0">
              <h1 className="font-extrabold text-3xl md:text-5xl">
                A Study of Creativity.
              </h1>
              <p className="text-base font-semibold leading-relaxed my-5 max-w-md mx-auto md:mx-0">
                Graduates of this online medical coding program will be trained in the theoretical instruction and practical skills that prepare you to gain entry-level medical coding positions in a variety of medical settings, such as physicians’ offices, ambulatory care centers and billing services.
              </p>
              <div className="mx-auto md:mx-0">
                <button className="px-6 py-3 bg-[#7620ff] text-white font-bold rounded-lg shadow-md hover:bg-[#580cd2] transition-all">
                  <ScrollLink to="services" smooth={true} duration={500} offset={-50} className="px-4 py-2 cursor-pointer">
                    Get Started
                  </ScrollLink>
                </button>
              </div>
            </div>
          </div>
          <div className="right relative p-3 h-full md:w-[50%]">
            <img src={AddImage1} alt="AddImage1" className='rounded-lg absolute md:-top-10' />
            <img src={AddImage2} alt="AddImage2" className='hidden lg:block rounded-lg absolute md:-top-5 md:right-26 right-1' />
            <img src={AddImage3} alt="AddImage3" className='rounded-lg absolute md:-bottom-5 bottom-32 md:left-46' />
            <img src={AddImage4} alt="AddImage4" className='rounded-lg absolute md:-bottom-20 bottom-32 md:right-26 right-2' />
          </div>
        </div>
      </div>

      <section id="Blog" className='Blog pt-32 pb-10 lg:max-w-screen-xl m-auto'>
        <div className=' px-5 md:px-20'>
          <h2 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Our Blog Stories
          </h2>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container py-10 mx-auto max-w-7x1 px-5 md:px-20">
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-right">
                <div className="bg-white p-6 rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-right">
                <div className="bg-white p-6 rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg" alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-right">
                <div className="bg-white p-6 rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574" alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='flex justify-center align-middle items-center'>
          <button className="px-10 py-3 bg-[#7620ff] text-white font-bold rounded-2xl shadow-md hover:bg-[#580cd2] transition-all">
            Load More
          </button>
        </div>
      </section>
      <section className='Contact bg-[#f5f5f5] py-10'>
        <div className="lg:max-w-screen-xl m-auto">
          <div className='px-5 md:px-20 my-6'>
            <h2 style={{ fontSize: "40px", fontWeight: "bold" }}>
              Our Review Stories
            </h2>
          </div>
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="px-2"
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              320: {
                slidesPerView: 1, // Mobile (smallest screens)
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2, // Tablets
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // Laptops and desktops
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg px-2 my-3 md:h-52 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    The training at Medical Coding School was exceptional! The instructors are highly knowledgeable and provided real-world examples that helped me understand the concepts better. Thanks to their certification prep, I passed my CPC exam on the first try!
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Riya S.n
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg px-2 md:h-52 my-3 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    I never thought I could learn medical coding so quickly! The hands-on training and flexible online classes made it easy for me to balance work and study. The career support was a game-changer, and I landed a job just weeks after completing my course.
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Karan M.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg my-3 md:h-52 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    I highly recommend Medical Coding School for anyone looking to start a career in medical coding. The trainers were always available to help, and the course material was clear and easy to follow. I feel confident in my new career path!
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Anjali P.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg my-3 md:h-52 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    Medical Coding School provided a thorough and engaging course. The trainers were not only knowledgeable but also patient, ensuring I fully understood each concept. I’m now confident in my coding skills and ready for a successful career!
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Anjali P.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg my-3 md:h-52 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    I had an amazing experience with Medical Coding School. The course was well-structured, and the trainers provided excellent support throughout the learning process. The job placement assistance helped me secure a position shortly after completing the course.
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Arvind S.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg md:h-52 my-3 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    Medical Coding School made learning medical coding a seamless experience. The interactive sessions, practical assignments, and real-time feedback helped me grasp the material quickly. I highly recommend it to anyone looking to start a career in this field.
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Neha D.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg md:h-52 my-3 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    The flexibility of online classes allowed me to learn at my own pace while still receiving top-notch instruction. The team at Medical Coding School was always supportive, and the curriculum was up-to-date and relevant to the industry
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Rahul B.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg md:h-52 my-3 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    I was impressed with the depth of the medical coding course at Medical Coding School. From the basics to advanced coding, the material was explained clearly. The career support and guidance they provided after graduation was invaluable
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Pooja L.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg my-3 md:h-52 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    Thanks to Medical Coding School, I was able to transition into a new career path smoothly. The course content was easy to understand, and the real-world applications gave me confidence. Their placement support helped me land my first job in medical coding!
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Amit P.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative max-w-sm bg-gray-800 text-white rounded-lg my-3 md:h-52 px-2 py-10 flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                    <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic text-center">
                    Medical Coding School offered a great learning experience. The course materials were comprehensive, and the staff provided personalized support. I felt fully prepared for my certification exam and was able to pass on my first attempt!
                  </p>
                  <p className="text-xs text-orange-400 text-right mt-2">
                    — Sneha K.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="flex  gap-4 py-10 px-5 md:px-20">
            <div className="relative max-w-sm bg-gray-800 text-white rounded-lg px-2 my-3 py-10 flex flex-col items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                  <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                </svg>
              </div>
              <div>
                <p className="text-sm italic text-center">
                  The training at Medical Coding School was exceptional! The instructors are highly knowledgeable and provided real-world examples that helped me understand the concepts better. Thanks to their certification prep, I passed my CPC exam on the first try!
                </p>
                <p className="text-xs text-orange-400 text-right mt-2">
                  — Riya S.n
                </p>
              </div>
            </div>
            <div className="relative max-w-sm bg-gray-800 text-white rounded-lg px-2 my-3 py-10 flex flex-col items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                  <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                </svg>
              </div>
              <div>
                <p className="text-sm italic text-center">
                  I never thought I could learn medical coding so quickly! The hands-on training and flexible online classes made it easy for me to balance work and study. The career support was a game-changer, and I landed a job just weeks after completing my course.
                </p>
                <p className="text-xs text-orange-400 text-right mt-2">
                  — Karan M.
                </p>
              </div>
            </div>
            <div className="relative max-w-sm bg-gray-800 text-white rounded-lg my-3 px-2 py-10 flex flex-col items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={42.282} height={34.626} viewBox="0 0 42.282 34.626">
                  <path data-name="Path 131" d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z" fill="#f2b300" />
                </svg>
              </div>
              <div>
                <p className="text-sm italic text-center">
                  I highly recommend Medical Coding School for anyone looking to start a career in medical coding. The trainers were always available to help, and the course material was clear and easy to follow. I feel confident in my new career path!
                </p>
                <p className="text-xs text-orange-400 text-right mt-2">
                  — Anjali P.
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div id="Contact" className="form lg:max-w-screen-xl m-auto">
          <div className='px-10 md:px-20 my-6'>
            <h2 style={{ fontSize: "40px", fontWeight: "bold" }}>
              Let's get in touch
            </h2>
          </div>
          <div className="md:flex md:px-20">
            <div className="left py-10 md:w-[50%] px-10">
              <div className="flex flex-col gap-5  h-full justify-between align-middle">
                <div className='flex flex-col gap-1'>
                  <label htmlFor="Fullname"> Full Name</label>
                  <input type="text" className='border-b outline-none' />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="Email"> Email</label>
                  <input type="text" className='border-b outline-none' />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="Subject">Subject</label>
                  <input type="text" className='border-b outline-none' />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="Message">Message</label>
                  <textarea name="Message" id="" className='border-b outline-none'></textarea>
                </div>
                <div>
                  <button className="px-10 py-3 bg-[#7620ff] text-white font-bold rounded-2xl shadow-md hover:bg-[#580cd2] transition-all">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className='right flex p-2 md:w-[50%]'>
              <div className='w-[50%] p-2 grid justify-center align-middle items-center gap-3'>
                <img src={formimg1} alt="formimg1" className='rounded-xl' />
                <img src={formimg2} alt="formimg2" className='rounded-xl' />
              </div>
              <div className="w-[50%] flex justify-center align-middle items-center">
                <img src={formimg3} alt="formimg3" className='rounded-xl' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default LandingPage
