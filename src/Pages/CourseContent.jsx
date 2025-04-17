import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Chapter1Top1 from './Chapters/ch1/Chapter1Top1';
import Chapter1Top2 from "./Chapters/ch1/Chapter1Top2"
import Chapter2Top1 from "./Chapters/ch2/Chapter2Top1"
import Chapter2Top2 from "./Chapters/ch2/Chapter2Top2"
import Chapter3Top1 from "./Chapters/ch3/Chapter3Top1"
import Chapter3Top2 from "./Chapters/ch3/Chapter3Top2"
import Chapter4Top1 from "./Chapters/ch4/Chapter4Top1"
import Chapter4Top2 from "./Chapters/ch4/Chapter4Top2"
import Chapter5Top1 from "./Chapters/ch5/Chapter5Top1"
import Chapter5Top2 from "./Chapters/ch5/Chapter5Top2"
import Chapter6Top1 from "./Chapters/ch6/Chapter6Top1"
import Chapter6Top2 from "./Chapters/ch6/Chapter6Top2"
import Chapter7Top1 from './Chapters/ch7/Chapter7Top1';
import Chapter7Top2 from './Chapters/ch7/Chapter7Top2';
import Chapter8Top1 from './Chapters/ch8/Chapter8Top1';
import Chapter8Top2 from './Chapters/ch8/Chapter8Top2';
import Chapter9Top1 from './Chapters/ch9/Chapter9Top1';
import Chapter9Top2 from './Chapters/ch9/Chapter9Top2';
import Chapter10Top1 from './Chapters/ch10/Chapter10Top1';
import Chapter10Top2 from './Chapters/ch10/Chapter10Top2';










const CourseContent = () => {
    const [activeComponent, setActiveComponent] = useState('chapter1sub1');
    const navigate = useNavigate();
    const [isChapterOneOpen1, setIsChapterOneOpen1] = useState(false);
    const [isChapterOneOpen2, setIsChapterOneOpen2] = useState(false);
    const [isChapterOneOpen3, setIsChapterOneOpen3] = useState(false);
    const [isChapterOneOpen4, setIsChapterOneOpen4] = useState(false);
    const [isChapterOneOpen5, setIsChapterOneOpen5] = useState(false);
    const [isChapterOneOpen6, setIsChapterOneOpen6] = useState(false);
    const [isChapterOneOpen7, setIsChapterOneOpen7] = useState(false);
    const [isChapterOneOpen8, setIsChapterOneOpen8] = useState(false);
    const [isChapterOneOpen9, setIsChapterOneOpen9] = useState(false);
    const [isChapterOneOpen10, setIsChapterOneOpen10] = useState(false);



    const toggleChapter1 = () => {
        setIsChapterOneOpen1(!isChapterOneOpen1);
    };
    const toggleChapter2 = () => {
        setIsChapterOneOpen2(!isChapterOneOpen2);

    };
    const toggleChapter3 = () => {
        setIsChapterOneOpen3(!isChapterOneOpen3);
    };
    const toggleChapter4 = () => {
        setIsChapterOneOpen4(!isChapterOneOpen4);
    };
    const toggleChapter5 = () => {
        setIsChapterOneOpen5(!isChapterOneOpen5);
    };
    const toggleChapter6 = () => {
        setIsChapterOneOpen6(!isChapterOneOpen6);
    };
    const toggleChapter7 = () => {
        setIsChapterOneOpen7(!isChapterOneOpen7);
    };
    const toggleChapter8 = () => {
        setIsChapterOneOpen8(!isChapterOneOpen8);
    };
    const toggleChapter9 = () => {
        setIsChapterOneOpen9(!isChapterOneOpen9);
    };
    const toggleChapter10 = () => {
        setIsChapterOneOpen10(!isChapterOneOpen10);
    };

    return (
        <>
            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 p-3 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <button
                                onClick={toggleChapter1}
                                className={`flex justify-between items-center p-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter1' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="font-semibold">Chapter 01</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen1 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {/* Subtopics */}
                            {isChapterOneOpen1 && (
                                <ul className="space-y-1 bg-gray-100 border-b py-1">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("chapter1sub1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "chapter1sub1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("chapter1sub2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "chapter1sub2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter2}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter2' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 02</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen2 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen2 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter2Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter2Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter2Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter2Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter3}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter3' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 03</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen3 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen3 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter3Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter3Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter3Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter3Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter4}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter4' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 04</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen4 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen4 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter4Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter4Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter4Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter4Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter5}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter5' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 05</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen5 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen5 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter5Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter5Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter5Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter5Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter6}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter6' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 06</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen6 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen6 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter6Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter6Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter6Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter6Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter7}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter7' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 07</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen7 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen7 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter7Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter7Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter7Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter7Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter8}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter8' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 08</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen8 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen8 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter8Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter8Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter8Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter8Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter9}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter9' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 09</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen2 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen9 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter9Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter9Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter9Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter9Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleChapter10}
                                className={`flex items-center p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full ${activeComponent === 'chapter10' ? 'bg-blue-200 dark:bg-gray-700' : ''}`}
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Chapter 10</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isChapterOneOpen10 ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isChapterOneOpen10 && (
                                <ul className="space-y-1 bg-gray-100 border-b">
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter10Top1")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter10Top1"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveComponent("Chapter10Top2")}
                                            className={`block p-2 px-8 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${activeComponent === "Chapter10Top2"
                                                ? "bg-blue-200 dark:bg-gray-700"
                                                : ""
                                                }`}
                                        >
                                            Subtopic 2
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li> 
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                {activeComponent === 'chapter1sub1' && (
                    <Chapter1Top1 />
                )}
                {activeComponent === 'chapter1sub2' && (
                    <Chapter1Top2 />
                )}
                {activeComponent === 'Chapter2Top1' && (
                    <Chapter2Top1 />
                )}
                {activeComponent === 'Chapter2Top2' && (
                    <Chapter2Top2 />
                )}
                {activeComponent === 'Chapter3Top1' && (
                    <Chapter3Top1 />
                )}
                {activeComponent === 'Chapter3Top2' && (
                    <Chapter3Top2 />
                )}
                {activeComponent === 'Chapter4Top1' && (
                    <Chapter4Top1 />
                )}
                {activeComponent === 'Chapter4Top2' && (
                    <Chapter4Top2 />
                )}
                {activeComponent === 'Chapter5Top1' && (
                    <Chapter5Top1 />
                )}
                {activeComponent === 'Chapter5Top2' && (
                    <Chapter5Top2 />
                )}
                {activeComponent === 'Chapter6Top1' && (
                    <Chapter6Top1 />
                )}
                {activeComponent === 'Chapter6Top2' && (
                    <Chapter6Top2 />
                )}
                {activeComponent === 'Chapter7Top1' && (
                    <Chapter7Top1 />
                )}
                {activeComponent === 'Chapter7Top2' && (
                    <Chapter7Top2 />
                )}
                {activeComponent === 'Chapter8Top1' && (
                    <Chapter8Top1 />
                )}
                {activeComponent === 'Chapter8Top2' && (
                    <Chapter8Top2 />
                )}
                 {activeComponent === 'Chapter9Top1' && (
                    <Chapter9Top1 />
                )}
                 {activeComponent === 'Chapter9Top2' && (
                    <Chapter9Top2 />
                )}
                {activeComponent === 'Chapter10Top1' && (
                    <Chapter10Top1 />
                )}
                {activeComponent === 'Chapter10Top2' && (
                    <Chapter10Top2 />
                )}
            </div>
        </>
    )
}

export default CourseContent