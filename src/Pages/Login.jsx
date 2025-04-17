import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ImageLight from '../assets/login-office.jpeg';
import ImageDark from '../assets/login-office-dark.jpeg';
import { Label, Input, Button } from '@windmill/react-ui';

const Login = () => {
  const [activeSection, setActiveSection] = useState('login'); // Default section

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col md:h-96 md:flex-row">
          <div className=" md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              {/* Login Form */}
              {activeSection === 'login' && (
                <div className="login">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                  <Label>
                    <span>Email</span>
                    <Input className="mt-1 outline h-8 p-1" type="email" placeholder="john@doe.com" />
                  </Label>

                  <Label className="mt-4">
                    <span>Password</span>
                    <Input className="mt-1 outline h-8 p-1" type="password" placeholder="***************" />
                  </Label>

                  <Button className="mt-4" block tag={Link} to="/app">
                    Log in
                  </Button>

                  <hr className="my-3" />
                  <p className="mt-4">
                    <button
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      onClick={() => setActiveSection('forgotPassword')}
                    >
                      Forgot your password?
                    </button>
                  </p>
                  <p className="mt-1">
                    <button
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      onClick={() => setActiveSection('create')}
                    >
                      Create account
                    </button>
                  </p>
                </div>
              )}

              {/* Forgot Password Section */}
              {activeSection === 'forgotPassword' && (
                <div className="ForgotPassword">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Forgot Password</h1>
                  <Label>
                    <span>Email</span>
                    <Input className="mt-1 outline h-8 p-1" type="email" placeholder="Enter your email" />
                  </Label>
                  <Button className="mt-4">Reset Password</Button>

                  <p className="mt-4">
                    <button
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      onClick={() => setActiveSection('login')}
                    >
                      Back to Login
                    </button>
                  </p>
                </div>
              )}

              {/* Create Account Section */}
              {activeSection === 'create' && (
                <div className="create">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Create Account</h1>
                  <Label>
                    <span>Name</span>
                    <Input className="mt-1 outline h-8 p-1" type="text" placeholder="Enter your name" />
                  </Label>
                  <Label className="mt-4">
                    <span>Email</span>
                    <Input className="mt-1 outline h-8 p-1" type="email" placeholder="Enter your email" />
                  </Label>
                  <Label className="mt-4">
                    <span>Password</span>
                    <Input className="mt-1 outline h-8 p-1" type="password" placeholder="***************" />
                  </Label>
                  <Button className="mt-4">Sign Up</Button>

                  <p className="mt-4">
                    <button
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      onClick={() => setActiveSection('login')}
                    >
                      Back to Login
                    </button>
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
