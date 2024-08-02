import Image from "next/image";
import { Inter } from "next/font/google";
import AudioPlayer from "@/comp/Audioplayer";
// import react from "@heroicons/react";
// import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // }, []);

  // const togglePlayPause = () => {
  //   if (audioRef.current.paused) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   } else {
  //     audioRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };

  return (
    <>
      <div className="min-h-screen relative">
        <div class="absolute z-[1] inset-0 z-[1] overflow-hidden">
          <img
            class="w-full h-full object-cover object-center"
            src="/spotlight/banner-bg.png"
            alt=""
          />
        </div>
        <section class="min-h-screen relative z-[2] text-600 body-font">
          <div class="min-h-screen mx-auto flex flex-wrap">
            <div class="flex flex-wrap items-center">
              <div class="p-4 lg:w-1/2 md:w-full items-center">
                <div class="items-center p-8 sm:flex-row flex-col">
                  <h1 className="text-5xl font-bold mb-4 tracking-wide">
                    Unforgettable Live
                  </h1>
                  <h1 className="text-5xl font-bold mb-6 tracking-wide">
                    Music Experiences
                  </h1>
                  <p className="text-2xl mb-6 tracking-wide">
                    In a world where music has the power to inspire, heal, and
                    bring people together, Musico stands as a testament to the
                    enduring magic of live performances.
                  </p>
                  <button
                    type="submit"
                    className="text-white p-2 rounded hover:bg-blue-700"
                    style={{
                      backgroundColor: "#3901AA",
                      padding: "1rem 1.6rem",
                      color: "white",
                      letterSpacing: ".05rem",
                    }}
                  >
                    MUSIC STORE
                  </button>
                </div>
              </div>
              <div class="lg:w-1/2 md:w-full lg:h-full flex justify-end">
                <div
                  class="flex sm:flex-row flex-col justify-end"
                  style={{ width: "96%" }}
                >
                  <img
                    src="/spotlight/banner-artist.png"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        aria-labelledby="footer-heading"
        style={{ backgroundColor: "#4112AA" }}
      >
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-white">
              <img src="/spotlight/spotify.png" />
            </div>
            <div>
              <img src="/spotlight/music.png" />
            </div>
            <div>
              <img src="/spotlight/tiktok.png" />
            </div>
            <div>
              <img src="/spotlight/ytmusic.png" />
            </div>
          </div>
        </div>
      </div>

      <section class="min-h-screen relative z-[2] text-600 body-font">
        <div class="min-h-screen mx-auto flex flex-wrap">
          <div class="flex flex-wrap items-center">
            <div class="p-4 lg:w-1/2 md:w-full items-center">
              <div class="items-center p-8 sm:flex-row flex-col">
                <h1 className="text-5xl font-bold mb-4 tracking-wide">
                  Creating Unforgettable
                </h1>
                <h1 className="text-5xl font-bold mb-6 tracking-wide">
                  Music Experiences
                </h1>
                <p className="text-2xl mb-6 tracking-wide">
                  This innovative company is dedicated to crafting unforgettable
                  moments where music, culture, and community converge.
                </p>
                <button
                  type="submit"
                  className="text-white p-2 rounded hover:bg-blue-700"
                  style={{
                    backgroundColor: "#3901AA",
                    padding: "1rem 1.6rem",
                    color: "white",
                    letterSpacing: ".05rem",
                  }}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
            <div class="lg:w-1/2 md:w-full flex justify-center align-center">
              <div
                class="flex sm:flex-row flex-col justify-end"
                style={{ width: "76%" }}
              >
                <div
                  class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 align-center rounded sm:flex-row flex-col justify-end"
                  style={{ width: "100%" }}
                >
                  <img
                    src="/spotlight/ABOUT.JPG"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-16 border-gray-700 my-8" />

      <section>
        <div class="py-8 text-center">
          {" "}
          <h3
            className="text-2xl mt-6 mb-4 tracking-wide text-center"
            style={{ color: "#32CCFE" }}
          >
            GET LOST IN MUSIC
          </h3>
          <h1 className="py-4 text-5xl font-bold mb-12 tracking-wide text-center">
            Our Musical Program
          </h1>
          <div class="mx-auto px-16 max-w-8xl ">
            <div class="relative">
              <div class="relative z-10 grid gap-5 grid-cols-6">
                <div
                  class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative py-16 px-8 rounded-xl"
                  style={{ backgroundColor: "#00001F" }}
                >
                  <div>
                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-2xl font-medium text-800 transition">
                        Secure by default
                      </h2>
                      <p class="text-700">
                        Provident fugit and vero voluptate. magnam magni
                        doloribus dolores voluptates a sapiente nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative py-16 px-8 rounded-xl"
                  style={{ backgroundColor: "#00001F" }}
                >
                  <div>
                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-2xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Secure by default
                      </h2>
                      <p class="text-700">
                        Provident fugit and vero voluptate. magnam magni
                        doloribus dolores voluptates a sapiente nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative py-16 px-8 rounded-xl"
                  style={{ backgroundColor: "#00001F" }}
                >
                  <div>
                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-2xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Secure by default
                      </h2>
                      <p class="dark:text-gray-300 text-700">
                        Provident fugit and vero voluptate. magnam magni
                        doloribus dolores voluptates a sapiente nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative py-16 px-8 rounded-xl"
                  style={{ backgroundColor: "#00001F" }}
                >
                  <div>
                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-lg font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Secure by default
                      </h2>
                      <p class="dark:text-gray-300 text-700">
                        Provident fugit and vero voluptate. magnam magni
                        doloribus dolores voluptates a sapiente nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative py-16 px-8 rounded-xl"
                  style={{ backgroundColor: "#00001F" }}
                >
                  <div>
                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-lg font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Secure by default
                      </h2>
                      <p class="dark:text-gray-300 text-700">
                        Provident fugit and vero voluptate. magnam magni
                        doloribus dolores voluptates a sapiente nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative py-16 px-8 rounded-xl"
                  style={{ backgroundColor: "#00001F" }}
                >
                  <div>
                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"></div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-lg font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Secure by default
                      </h2>
                      <p class="dark:text-gray-300 text-700">
                        Provident fugit and vero voluptate. magnam magni
                        doloribus dolores voluptates a sapiente nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="my-16 text-white p-2 rounded hover:bg-blue-800 text-center border-4 border-blue-800"
            style={{
              // backgroundColor: "#3901AA",
              padding: "1.2rem 2.5rem",
              color: "white",
              letterSpacing: ".05rem",
              borderRadius: "2rem",
            }}
          >
            VIEW ALL PROGRAMS
          </button>
        </div>
      </section>

      <hr className="mx-16 border-gray-700 my-8" />

      <div className="w-full my-24">
        <AudioPlayer />
      </div>

      <section>
        <div class="py-8 text-center">
          {" "}
          <h3
            className="text-2xl mt-6 mb-4 tracking-wide text-center"
            style={{ color: "#32CCFE" }}
          >
            OUR MUSIC PROJECTS
          </h3>
          <h1 className="py-4 text-5xl font-bold mb-12 tracking-wide text-center">
            Experience the Soundtrack of <br /> Your Life!
          </h1>
          <div class="mx-auto px-16 max-w-8xl ">
            <div class="relative">
              <div class="relative z-10 grid gap-5 grid-cols-6">
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <div>
                    <div
                      class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 align-center rounded sm:flex-row flex-col justify-end"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="/spotlight/pro2.jpg"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Feel The Vibes
                      </h2>
                      <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                        Electronic
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <div>
                    <div
                      class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 align-center rounded sm:flex-row flex-col justify-end"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="/spotlight/pro1.jpg"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        No More Love
                      </h2>
                      <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                        Acoustic
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <div>
                    <div
                      class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 align-center rounded sm:flex-row flex-col justify-end"
                      style={{ width: "100%" }}
                    >
                      <img
                        src="/spotlight/pro3.jpg"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </div>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                        Let You Down
                      </h2>
                      <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                        Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="my-16 text-white p-2 rounded hover:bg-blue-800 text-center border-4 border-blue-800"
            style={{
              padding: "1.2rem 2.5rem",
              color: "white",
              letterSpacing: ".05rem",
              borderRadius: "2rem",
            }}
          >
            VIEW ALL ALBUMS
          </button>
        </div>
      </section>

      <hr className="mx-16 border-gray-700 my-8" />

      <section>
        <div class="py-8 text-center">
          {" "}
          <h3
            className="text-2xl mt-6 mb-4 tracking-wide text-center"
            style={{ color: "#32CCFE" }}
          >
            MUSICIANS
          </h3>
          <h1 className="py-4 text-5xl font-bold mb-12 tracking-wide text-center">
            Band Members
          </h1>
          <div class="mx-auto px-10 max-w-8xl ">
            <div class="relative">
              <div class="relative z-10 grid gap-2 grid-cols-6">
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <img
                    src="/spotlight/band.jpg"
                    style={{ width: "100%", borderRadius: "22px" }}
                  />
                  <div class="mt-6 text-center relative z-10 space-y-2">
                    <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                      Ella Rivers
                    </h2>
                    <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                      Lead Vocalist
                    </p>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <img
                    src="/spotlight/brand1.jpg"
                    style={{ width: "100%", borderRadius: "22px" }}
                  />
                  <div class="mt-6 text-center relative z-10 space-y-2">
                    <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                      Lucas Thompson
                    </h2>
                    <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                      Guitarist and Songwriter
                    </p>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <img
                    src="/spotlight/brand2.jpg"
                    style={{ width: "100%", borderRadius: "22px" }}
                  />
                  <div class="mt-6 text-center relative z-10 space-y-2">
                    <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                      Maxwell Cruz
                    </h2>
                    <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                      Drummer and Percussionist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-full">
        <div class="absolute z-[1] inset-0 z-[1] overflow-hidden">
          <img
            class="w-full h-full object-cover object-center"
            src="/spotlight/cta-background.jpg"
            alt=""
          />
        </div>
        <section class="relative z-[2] text-600 body-font mt-6">
          <div class="min-h-screen mx-auto flex flex-wrap">
            <div class="flex flex-wrap items-center">
              <div class="p-4 lg:w-1/2 md:w-full items-center">
                {/* <div class="items-center p-8 sm:flex-row flex-col">
                  <h1 className="text-5xl font-bold mb-4 tracking-wide">
                    Unforgettable Live
                  </h1>
                  <h1 className="text-5xl font-bold mb-6 tracking-wide">
                    Music Experiences
                  </h1>
                  <p className="text-2xl mb-6 tracking-wide">
                    In a world where music has the power to inspire, heal, and
                    bring people together, Musico stands as a testament to the
                    enduring magic of live performances.
                  </p>
                  <button
                    type="submit"
                    className="text-white p-2 rounded hover:bg-blue-700"
                    style={{
                      backgroundColor: "#3901AA",
                      padding: "1rem 1.6rem",
                      color: "white",
                      letterSpacing: ".05rem",
                    }}
                  >
                    MUSIC STORE
                  </button>
                </div> */}
              </div>
              <div class="lg:w-1/2 md:w-full flex justify-end">
                <div class="items-center p-8 sm:flex-row flex-col">
                  <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                    DOWNLOAD NOW
                  </p>
                  <h1 className="text-5xl font-bold mt-4 mb-4 tracking-wide">
                    Get Lost in Music
                  </h1>
                  <p className="text-2xl mb-6 tracking-wide">
                    Unlock the Ultimate Music Experience! Download the Musico
                    App Now and Dive into a World of Melodies.
                  </p>
                  <p className="text-2xl mb-6 tracking-wide">LISTEN ON:</p>
                  <div className="py-1 mx-auto max-w-8xl sm:px-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div className="text-white">
                        <img src="/spotlight/spotify.png" className="w-full" />
                      </div>
                      <div>
                        <img src="/spotlight/music.png" className="w-full" />
                      </div>
                      <div>
                        <img src="/spotlight/tiktok.png" className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div class="py-24 text-center">
          {" "}
          <h3
            className="text-2xl mt-6 mb-4 tracking-wide text-center"
            style={{ color: "#32CCFE" }}
          >
            MUSIC ARTICLES
          </h3>
          <h1 className="py-4 text-5xl font-bold mb-12 tracking-wide text-center">
            Your Favourite Blogs
          </h1>
          <div class="mx-auto px-10 max-w-8xl ">
            <div class="relative">
              <div class="relative z-10 grid gap-2 grid-cols-6">
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <img
                    src="/spotlight/post-01.jpg"
                    style={{ width: "100%", borderRadius: "22px" }}
                  />
                  <div class="mt-6 text-start relative z-10 space-y-2">
                    <h2 class="text-2xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                      The Power of Music: How Musico’s Events Transform
                      Communities
                    </h2>
                    {/* <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                      Lead Vocalist
                    </p> */}
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <img
                    src="/spotlight/post-02.jpg"
                    style={{ width: "100%", borderRadius: "22px" }}
                  />
                  <div class="mt-6 text-start relative z-10 space-y-2">
                    <h2 class="text-2xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                      Behind the Scenes: Crafting Immersive Music Experiences
                    </h2>
                    {/* <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                      Guitarist and Songwriter
                    </p> */}
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl">
                  <img
                    src="/spotlight/post-03.jpg"
                    style={{ width: "100%", borderRadius: "22px" }}
                  />
                  <div class="mt-6 text-start relative z-10 space-y-2">
                    <h2 class="text-2xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                      Exploring Musical Diversity: A Guide to Musico’s Eclectic
                      Lineup
                    </h2>
                    {/* <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                      Drummer and Percussionist
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="my-16 text-white p-2 rounded hover:bg-blue-800 text-center border-4 border-blue-800"
            style={{
              padding: "1.2rem 2.5rem",
              color: "white",
              letterSpacing: ".05rem",
              borderRadius: "2rem",
            }}
          >
            VIEW ALL ALBUMS
          </button>
        </div>
      </section>

      <div className="py-16 text-center">
        <h3
          className="text-2xl mb-4 tracking-wide text-center"
          style={{ color: "#32CCFE" }}
        >
          MUSICIANS
        </h3>
        <h1 className="py-4 text-5xl font-bold mb-24 tracking-wide text-center">
          Upcoming Events
        </h1>
        <div class="z-10 grid gap-6 grid-cols-4 px-8 mt-12">
          <div class="flex align-center justify-center h-24 col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden gap-2 p-2">
            <h1
              class="text-6xl text-800 transition flex align-center justify-center p-2"
              style={{ color: "#32CCFE" }}
            >
              18
            </h1>
            <div class="align-center justify-center text-start relative z-10 space-y-2">
              <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                December
              </h2>
              <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                2024
              </p>
            </div>
          </div>
          <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden h-24 p-2">
            <div class="text-start relative z-10 space-y-2">
              <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                ElectroGroove Nights
              </h2>
              <p class="mt-5 text-2xl text-500" style={{ color: "#32CCFE" }}>
                The Electric Warehouse, Midtown Metropolis
              </p>
            </div>
          </div>
          <div class="text-center col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden h-24 p-4">
            <button
              type="submit"
              className="text-white p-2 rounded hover:bg-blue-900 text-center border-2 border-gray-600"
              style={{
                padding: "1.2rem 2.5rem",
                color: "white",
                letterSpacing: ".05rem",
                borderRadius: "2rem",
              }}
            >
              BUY TICKETS
            </button>
          </div>
        </div>
        <hr className="mx-16 border-gray-700 my-8" />

        <div class="z-10 grid gap-6 grid-cols-4 px-8 mt-12">
          <div class="flex align-center justify-center h-24 col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden gap-2 p-2">
            <h1
              class="text-6xl text-800 transition flex align-center justify-center p-2"
              style={{ color: "#32CCFE" }}
            >
              2
            </h1>
            <div class="align-center justify-start text-start relative z-10 space-y-2">
              <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                October
              </h2>
              <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                2024
              </p>
            </div>
          </div>
          <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden h-24 p-2">
            <div class="text-start relative z-10 space-y-2">
              <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                Harmony Fest
              </h2>
              <p class="mt-5 text-2xl text-500" style={{ color: "#32CCFE" }}>
                Harmony Park Amphitheater, Riverdale City
              </p>
            </div>
          </div>
          <div class="text-center col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden h-24 p-4">
            <button
              type="submit"
              className="text-white p-2 rounded hover:bg-blue-900 text-center border-2 border-gray-600"
              style={{
                padding: "1.2rem 2.5rem",
                color: "white",
                letterSpacing: ".05rem",
                borderRadius: "2rem",
              }}
            >
              BUY TICKETS
            </button>
          </div>
        </div>
        <hr className="mx-16 border-gray-700 my-8" />

        <div class="z-10 grid gap-6 grid-cols-4 px-8 mt-12">
          <div class="flex align-center justify-center h-24 col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden gap-2 p-2">
            <h1
              class="text-6xl text-800 transition flex align-center justify-center p-2"
              style={{ color: "#32CCFE" }}
            >
              18
            </h1>
            <div class="align-center justify-center text-start relative z-10 space-y-2">
              <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                December
              </h2>
              <p class="text-2xl text-500" style={{ color: "#32CCFE" }}>
                2024
              </p>
            </div>
          </div>
          <div class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden h-24 p-2">
            <div class="text-start relative z-10 space-y-2">
              <h2 class="text-3xl font-medium text-800 transition group-hover:text-purple-950 dark:text-white">
                ElectroGroove Nights
              </h2>
              <p class="mt-5 text-2xl text-500" style={{ color: "#32CCFE" }}>
                The Electric Warehouse, Midtown Metropolis
              </p>
            </div>
          </div>
          <div class="text-center col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden h-24 p-4">
            <button
              type="submit"
              className="text-white p-2 rounded hover:bg-blue-900 text-center border-2 border-gray-600"
              style={{
                padding: "1.2rem 2.5rem",
                color: "white",
                letterSpacing: ".05rem",
                borderRadius: "2rem",
              }}
            >
              BUY TICKETS
            </button>
          </div>
        </div>
        <hr className="mx-16 border-gray-700 my-8" />

        <button
          type="submit"
          className="mt-16 text-white p-2 rounded hover:bg-blue-800 text-center border-4 border-blue-800"
          style={{
            padding: "1.2rem 2.5rem",
            color: "white",
            letterSpacing: ".05rem",
            borderRadius: "2rem",
          }}
        >
          VIEW ALL EVENTS
        </button>
      </div>

      

    </>
  );
}
