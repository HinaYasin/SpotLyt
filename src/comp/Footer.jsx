import React from "react";

export default function Footer() {
  return (
    <div aria-labelledby="footer-heading" className="px-12" style={{ backgroundColor: "#070C29" }} >
      <div className="px-12 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* First Column */}
          <div className="sm:col-span-1/9">
            <div className="text-white">
              <a
                className="text-lg font-bold tracking-tighter text-800 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
                href="/groups/footer/"
              >
                Louder Pro
              </a>
              <p className="w-1/1 mt-2 text-sm text-gray-500">
                Louder Pro is not just an event organizer; it&apos;s a passionate
                curator of live music experiences. It is dedicated to crafting
                unforgettable moments.
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div lassName="sm:col-span-1">
            <div className="text-lg font-bold tracking-wider text-800">
              Support
            </div>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a
                  href="./pricing.html"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="./templates.html"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="./landing-pages.html"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="./landing-pages.html"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="sm:col-span-1">
            <div className="text-lg font-bold tracking-wider text-800">
            Resources
            </div>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.wickedblocks.dev"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://www.wickedbackgrounds.com/"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Media Center
                </a>
              </li>
              <li>
                <a
                  href="https://wickedpopups.com/"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Testimonials
                </a>
              </li>   
              <li>
                <a
                  href="https://wickedpopups.com/"
                  className="text-base font-normal text-gray-500 hover:text-blue-600"
                >
                  Travel Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 mx-auto bg-50 max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-wrap items-baseline lg:justify-center">
          <span className="mt-2 text-lg font-light text-gray-500">
            Copyright © 2020 - 2021
            <a
              href="https://wickedlabs.dev"
              className="mx-2 text-wickedblue hover:text-gray-500"
              rel="noopener noreferrer"
            >
              @wickedlabsHQ
            </a>
            . Since 2020
          </span>
        </div>
      </div>
    </div>
  );
}
