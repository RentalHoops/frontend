import React, {useState} from 'react'

const Accounts = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin((prev) => !prev);
    };
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-4">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleForm}
            >
              {isLogin ? 'Sign up here.' : 'Login here.'}
            </span>
          </p>
        </div>
      </div>
    )
  }
  
  export default Accounts