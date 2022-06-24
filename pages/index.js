import Head from 'next/head'

import { FaRegUser } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

export default function Home() {
  async function onLoginSubmit(event) {
    event.preventDefault()
    // Initialize request body
    var body = JSON.stringify({
      username: event.target.account.value,
      password: event.target.password.value,
      role: event.target.roles.value.split(' ').join('-').toLowerCase(),
    })
    const res = await fetch('/api/login', {
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const result = await res.json()
    // alert(`Is this your full name: ${JSON.stringify(result)}`)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Headers */}
      <Head>
        <title>DegreeOverview</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Login Components */}
      <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl w-2/3 text-center">
        {/* Login Section */}
        <div className="w-3/5 p-5">
          {/* Login Form */}
          <form id="loginForm" onSubmit={onLoginSubmit} className="w-100">
            {/* Top Left Name */}
            <div className="text-left font-bold">
              <span className="text-green-500">Degree</span>Overview
            </div>
            {/* Signin Hint */}
            <div className="py-10">
              <h2 className="text-2xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              {/* Little Bar */}
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            </div>
            {/* Input Form */}
            <div className="flex flex-col items-center">
              {/* Account */}
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <FaRegUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  required
                  placeholder="Account"
                  name="account"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              {/* Password */}
              <div className="bg-gray-100 w-64 p-2 flex items-center mt-4 mb-8">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2
              inline-block font-semibold hover:bg-green-500 hover:text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Role Selection */}
        <div className="w-2/5 bg-green-500 text-white rounded-r-2xl py-36 px-12">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">Choose Role</h2>
          {/* Little Bar */}
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          {/* Radio Buttons */}
          <div className="flex flex-col">
            <fieldset>
              <legend className="sr-only">role</legend>
              <div className="flex items-center mb-4">
                <input
                  id="role-option-1"
                  type="radio"
                  name="roles"
                  value="Course Designer"
                  defaultChecked
                  form="loginForm"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="role-option-1"
                  className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Course Designer
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="role-option-2"
                  type="radio"
                  name="roles"
                  value="Lecturer"
                  form="loginForm"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="role-option-2"
                  className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lecturer
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="role-option-3"
                  type="radio"
                  name="roles"
                  value="Student"
                  form="loginForm"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="role-option-3"
                  className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Student
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}
