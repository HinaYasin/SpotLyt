import react from "react";
import Link from "next/link";

export default function Login() {
    return (
      <div class="bg-white h-screen flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3" style={{ border: '5px solid rgba(48, 52, 54, 0.3)'}}>
          <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center text-3xl mb-6 text-gray-600 font-bold font-sans">
              Register
            </h1>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="email"
              >
                Email*
              </label>
              <input
                class="w-full text-gray-800 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="@email"
                required
              />
            </div>
            <div>
              <label
                class="text-gray-800 text-gray-800 font-semibold block my-3 text-md"
                for="password"
              >
                Password*
              </label>
              <input
                class="w-full text-gray-800 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="password"
                id="password"
                placeholder="password"
                required
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="confirm"
              >
                Confirm password*
              </label>
              <input
                class="w-full text-gray-800 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="confirm"
                id="confirm"
                placeholder="confirm password"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Register
            </button>
            <p class="text-center text-neutral-600 text-base font-semibold mt-8 mb-4">Remember your password? <Link href="/login">Login Here</Link></p>
          </form>
        </div>

        
      </div>
    );
  }
  