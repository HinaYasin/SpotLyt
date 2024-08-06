// src/AudioPlayer.js
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const audioFiles = [
  {
    name: "Frau Power",
    audio:
      "http://creativthemes.com/theme-demo/noble-band-pro/wp-content/uploads/sites/126/2022/07/Black-Hole-Sun.mp3",
  },
  {
    name: "Blank Space",
    audio:
      "http://creativthemes.com/theme-demo/noble-band-pro/wp-content/uploads/sites/126/2022/07/Paranoia-Overflow.mp3",
  },
  {
    name: "Blue Ghost",
    audio:
      "https://creativthemes.com/theme-demo/noble-band-pro/wp-content/uploads/sites/126/2022/07/Memories_Of_Paradise.mp3",
  },
  {
    name: "Broken Song",
    audio:
      "http://creativthemes.com/theme-demo/noble-band-pro/wp-content/uploads/sites/126/2022/07/Blue_Ghost.mp3",
  },
];

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

const AudioPlayer = () => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRefs = useRef(audioFiles.map(() => React.createRef()));

//   console.log('duration data', audioFiles.map((audio) => audioRefs.current[1]?.current?.duration))

  useEffect(() => {
    const currentAudio = audioRefs.current[currentAudioIndex]?.current;
    // console.log('currentAudio', currentAudio.duration)
    if (currentAudio) {
      const updateTime = () => setCurrentTime(currentAudio.currentTime);
      const setAudioDuration = () => setDuration(currentAudio.duration);

      currentAudio.addEventListener("timeupdate", updateTime);
      currentAudio.addEventListener("loadedmetadata", setAudioDuration);

      return () => {
        currentAudio.removeEventListener("timeupdate", updateTime);
        currentAudio.removeEventListener("loadedmetadata", setAudioDuration);
      };
    }
  }, [currentAudioIndex]);

  const playAudio = (index) => {
    if (
      currentAudioIndex !== -1 &&
      !audioRefs.current[currentAudioIndex].current.paused
    ) {
      audioRefs.current[currentAudioIndex].current.pause();
      audioRefs.current[currentAudioIndex].current.currentTime = 0;
    }
    setCurrentAudioIndex(index);
    audioRefs.current[index].current.play();
  };

  const togglePause = () => {
    if (currentAudioIndex !== -1) {
      if (audioRefs.current[currentAudioIndex].current.paused) {
        audioRefs.current[currentAudioIndex].current.play();
      } else {
        audioRefs.current[currentAudioIndex].current.pause();
      }
    }
  };

  const nextAudio = () => {
    if (currentAudioIndex < audioFiles.length - 1) {
      playAudio(currentAudioIndex + 1);
    }
  };

  const previousAudio = () => {
    if (currentAudioIndex > 0) {
      playAudio(currentAudioIndex - 1);
    }
  };

  return (
    <div>
      {/* {currentAudioIndex !== -1 && (
        <div>
          <p>Current Time: {formatTime(currentTime)}</p>
          <p>Duration: {formatTime(duration)}</p>
        </div>
      )} */}

      {audioFiles.map((audio, index) => (
        <audio
          key={index}
          ref={audioRefs.current[index]}
          src={audio.audio}
        ></audio>
      ))}

      <div class="w-full">
        <h3
          className="text-2xl mt-6 mb-4 tracking-wide text-center"
          style={{ color: "#32CCFE" }}
        >
         LATEST ALBUM
        </h3>
        <h1 className="py-4 text-5xl font-bold tracking-wide text-center">
        Playlist Paradise
        </h1>
        <div class="flex items-center justify-center min-h-screen bg-red-lightest">
          <div class="bg-white shadow-lg rounded-lg" style={{ width: "80%" }}>
            <div
              class="flex w-full h-full rounded-lg"
              style={{ backgroundColor: "#00001F", color: "white" }}
            >
              <div className="w-full p-4">
                <Image
                  class="w-full rounded hidden md:block"
                  src="/spotlight/album-cover.jpg"
                  alt="Album Pic"
                  width={1000}
                  height={100}
                />
              </div>
              <div class="w-full p-8">
                <div>
                  <div className="text-2xl mt-2 tracking-wide text-start text-gray-400">
                    Metallica
                  </div>
                  <h1 className="py-2 text-5xl font-bold mb-12 tracking-wide text-start">
                    Shadows Follow
                  </h1>
                </div>
                {audioFiles.map((audio, index) => (
                  <div
                    class="flex justify-between py-4 mt-5"
                    key={index}
                    //   style={{ border: "2px solid white" }}
                  >
                    <div className="flex align-center justify-center gap-2">
                      <button
                        className="flex align-center justify-center px-2 pt-1"
                        key={index}
                        onClick={() => playAudio(index)}
                      >
                        <svg
                          id="play-icon"
                          width="14"
                          viewBox="0 0 31 37"
                          fill="red"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"
                            class="fill-slate-500 dark:fill-slate-400"
                          ></path>
                        </svg>
                      </button>
                      <h3 class="text-2xl font-medium">{audio.name}</h3>
                    </div>

                    <div class="text-red-lighter">
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                      </svg>
                    </div>
                  </div>
                ))}

                <div class="flex justify-between items-center mt-16 mx-32">
                  <button
                    class="text-grey-darker"
                    onClick={previousAudio}
                    disabled={currentAudioIndex <= 0}
                  >
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                    </svg>
                  </button>
                  <button
                    class="text-black p-4 rounded-full bg-red-600 shadow-lg"
                    onClick={togglePause}
                    disabled={currentAudioIndex === -1}
                  >
                    {currentAudioIndex !== -1 &&
                    audioRefs.current[currentAudioIndex].current.paused ? (
                      <svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -5 20 52"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"
                          class="fill-slate-500 dark:fill-slate-400"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                      </svg>
                    )}
                  </button>
                  <button
                    class="text-grey-darker"
                    onClick={nextAudio}
                    disabled={currentAudioIndex >= audioFiles.length - 1}
                  >
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
