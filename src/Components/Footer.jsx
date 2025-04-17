import React from 'react'
import Logo from "../assets/mcslogo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className="footer bg-[#252a2f] text-white">
                <div
                    className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl m-auto flex flex-col justify-center align-middle item-center">
                    <div className="grid gap-5 row-gap-10 mb-8 lg:grid-cols-6 m-auto md:pl-10">
                        <div className="md:max-w-md lg:col-span-2">
                            <a href="/" aria-label="Go home" title="Company" className="">
                                <img src={Logo} alt="Logo" className='w-60' />
                            </a>
                            <div className="mt-4 lg:max-w-sm">
                                <p className="text-sm text-white">
                                we offer expert-led medical coding training with hands-on practice, covering ICD, CPT, and HCPCS coding.Flexible learning options make it easy to start your journey toward a rewarding medical coding career.
                                </p>

                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3 m-auto px-3">
                            <div>
                                <p className="font-semibold tracking-wide text-white">Courses</p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a href="./FoundationTesting.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Fundamentals
                                            of Software Testing</a>
                                    </li>
                                    <li>
                                        <a href="./ManualTesting.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Manual
                                            Testing</a>
                                    </li>
                                    <li>
                                        <a href="./AutomationTesting.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Automation
                                            Testing</a>
                                    </li>
                                    <li>
                                        <a href="./APITesting.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">API
                                            Testing</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="midbox w-32 md:grid-cols-[2fr_1fr_2fr] col-span-1">
                                <p className="font-semibold tracking-wide text-white">Useful links</p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a href="./index.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Home</a>
                                    </li>
                                    <li>
                                        <a href="./About.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Serv</a>
                                    </li>
                                    <li>
                                        <a href="./Contact.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Contacts</a>
                                    </li>
                                    <li>
                                        <a href="./Cources.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Courses</a>
                                    </li>
                                    <li>
                                        <a href="./Testimonials.html"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">Testimonials</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-white">Contact</p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a href="/"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">New
                                            York, NY 10012, US</a>
                                    </li>
                                    <li>
                                        <a href="/"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">info@example.com</a>
                                    </li>
                                    <li>
                                        <a href="/"
                                            className="hover:underline transition-colors duration-300 hover:text-deep-purple-accent-400">+
                                            01 234 567 88</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div>
                        <div className="flex flex-col justify-center align-middle item-center text-center border-t py-9">
                            <div className="container m-auto flex justify-center align-middle items-center">
                                <section className="flex gap-2 m-auto">
                                    <a className="btn text-body m-1" href="#!"
                                        role="button">
                                        <FaFacebookF size={24} />
                                    </a>
                                    <a className="btn text-body m-1" href="#!"
                                        role="button">
                                        <FaTwitter size={24} />
                                    </a>
                                    <a className="btn text-body m-1" href="#!"
                                        role="button">
                                        <FaInstagram size={24} />
                                    </a>
                                    <a className="btn text-body m-1" href="#!"
                                        role="button">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a className="btn text-body m-1" href="#!"
                                        role="button" >
                                        <FaGithub size={24} />
                                    </a>
                                </section>
                            </div>
                            <div className="text-center p-3">
                                © 2025 Copyright | All rights reserved | Medical Coding School
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer