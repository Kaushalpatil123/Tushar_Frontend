import React, { useState } from 'react';
import usericon from "../assets/usericon.avif"

const EditUser = () => {
    const [avatar, setAvatar] = useState(usericon);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setAvatar(reader.result);
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}
        >
            {/* Profile Header */}
            <div className="flex flex-col items-center gap-4">
                {/* Editable Avatar */}
                <div className="relative w-24 h-24">
                    <img
                        src={avatar}
                        alt="User Avatar"
                        className="w-full h-full rounded-full object-cover border-2 border-gray-300"
                    />
                    <label
                        htmlFor="avatarInput"
                        className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full cursor-pointer hover:bg-blue-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </label>
                    <input
                        id="avatarInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h2>
                    <p className="text-gray-600 dark:text-gray-400">Update your personal information</p>
                </div>
            </div>

            {/* Edit Form */}
            <form className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="John Doe"
                            className="w-full p-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="johndoe@example.com"
                            className="w-full p-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+123 456 7890"
                            className="w-full p-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="123 Main Street, City, Country"
                            className="w-full p-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-center mt-4 gap-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditUser