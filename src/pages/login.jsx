import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen">
      {/* <div class="absolute z-[1]">
        <img
          class="h-full w-full object-cover object-center"
          src="/spotlight/banner-bg.png"
          alt=""
        />
      </div> */}
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="relative z-[2] p-8 rounded shadow-md w-full max-w-md"
          style={{ border: "5px solid rgba(48, 52, 54, 0.3)" }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-800 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border border-gray-300 rounded bg-inherit"
                required
              />
              <Link
                href="/forgot-password"
                class="mt-2 text-800 font-semibold flex justify-end text-sm font-normal outline-none"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mb-6 ">
              <label
                htmlFor="password"
                className="block text-800 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full p-2 border border-gray-300 rounded bg-inherit"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white p-2 rounded hover:bg-blue-700"
              style={{
                backgroundColor: "#3901AA",
                padding: "1rem 1.6rem",
                color: "white",
                letterSpacing: ".05rem",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
