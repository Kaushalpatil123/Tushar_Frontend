import React from 'react'
import usericon from "../assets/usericon.avif"

const UserAccount = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-4xl mx-auto" 
        style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}
        >
            {/* Profile Header */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24">
                    <img
                        src={usericon}
                        alt="User Avatar"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
                    <p className="text-gray-600 dark:text-gray-400">johndoe@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                </div>
            </div>

            {/* User Information */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                        <p className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1">John Doe</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                        <p className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1">johndoe@example.com</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
                        <p className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1">+123 456 7890</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Address</label>
                        <p className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1">
                            123 Main Street, City, Country
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccount