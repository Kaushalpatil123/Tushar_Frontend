import React from 'react'
import course1 from "../assets/course1.avif"
import course2 from "../assets/course2.avif"
import course3 from "../assets/course3.avif"

const MyCourse = () => {
    const courses = [
        {
            id: 1,
            title: "Introduction to Software Testing",
            image: course1,
        },
        {
            id: 2,
            title: "Advanced JavaScript for Web Development",
            image: course2,
        },
        {
            id: 3,
            title: "Mastering React.js",
            image: course3,
        },
    ];
    return (
        <div className="dark:bg-gray-900 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                My Courses
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {courses.map((course) => (
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src={course.image}
                                alt={course.title} />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="/courseContent" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Go to Course
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MyCourse