import Link from "next/link";

export default function ForgotPassword() {
    return (
      <div className="min-h-screen flex items-center justify-center" >
        {/* <div class="absolute z-[1]">
          <img
            class="h-full w-full object-cover object-center"
            src="/spotlight/banner-bg.png"
            alt=""
          />
        </div> */}
        <div className="relative z-[2] p-8 rounded shadow-md w-full max-w-md" style={{ border: '5px solid rgba(48, 52, 54, 0.3)'}}>
          <h1 className="text-3xl font-bold mb-4 text-center">Forgot Password</h1>
          <p class="text-center text-neutral-600 text-base font-semibold mb-12">Remember your password? <Link href='/login'> Login Here</Link></p>
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
            </div>
            <button
              type="submit"
              className="w-full text-white p-2 rounded hover:bg-blue-700"
              style={{
                backgroundColor: "#3901AA",
                padding: "1rem 1.6rem",
                color: "white",
                letterSpacing: '.05rem'
              }}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    );
  }
  