const Login = () => {
  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-700 bg-opacity-40 bg-clip-padding p-6 backdrop-blur-md backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-200">
          Login
          <span className="ml-2 text-purple-600">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <a
            href="#"
            className="mt-2 inline-block text-sm hover:text-purple-600 hover:underline"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-sm btn-block mt-2"> Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
