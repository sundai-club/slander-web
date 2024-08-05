import { useEffect, useState } from "react";
import useSound from "use-sound";

import { useAudioStore } from "./AudioStore";
// Add this declaration at the top of your file
declare global {
  interface Window {
    highlightTimeout?: NodeJS.Timeout;
  }
}

const PlayerComponent = () => {
  const { setAudioURL, setAudioBlob, audioURL, highlights } = useAudioStore();
  const audioFile = "/testAudio.mp3";

  //a function to handle the highlight card click - it will go to the time where the joke starts and runs for 40 secs

  //mock data
  const mockData = {
    data: {
      highlights: [
        {
          startSec: 7,
          durationSec: 28,
          text: "Braun",
          laughScore: 14956.07,
        },
        {
          startSec: 100,
          durationSec: 34,
          text: "fuchsia",
          laughScore: 72806.93,
        },
        {
          startSec: 49,
          durationSec: 87,
          text: "Hatchback",
          laughScore: 97048.86,
        },
        {
          startSec: 59,
          durationSec: 82,
          text: "East",
          laughScore: 99229.1,
        },
        {
          startSec: 73,
          durationSec: 18,
          text: "AGP",
          laughScore: 31583.65,
        },
      ],
    },
  };

  //test count - the number of highlights in a video will be equal to the number of cards being displayed

  return (
    <>
      {" "}
      <div className="mt-[100px]">
        <div className="flex items-center space-x-4">
          <input
            type="file"
            name="file"
            onChange={async (e) => {
              if (e.target.files && e.target.files[0]) {
                console.log(e.target.files);
                alert("Upload ok : " + e.target.files[0].name);
                setAudioURL(URL.createObjectURL(e.target.files[0])); // Set the audio URL
                setAudioBlob(e.target.files[0]); // Set the audio blob
              } else {
                alert("Upload failed");
              }
            }}
          />
          {/* <button
            onClick={playingButton}
            className="border-none bg-transparent p-0 focus:outline-none"
          >
            <IconContext.Provider value={{ size: "2em", color: "#FFA500" }}>
              {!isPlaying ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
            </IconContext.Provider>
          </button>
          <input
            type="range"
            min="0"
            max={Number(duration) / 1000}
            value={seconds}
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
            className="w-[800px] accent-yellow-500"
          /> */}
        </div>
        {/* <div className="mt-2">
          <p className="text-sm text-white">
            {currTime.min}:{currTime.sec}
          </p>
        </div> */}
      </div>
      <div className="mx-[170px] grid grid-cols-3 gap-x-[300px] gap-y-[60px] p-14">
        {highlights.map((highlight, index) => (
          <div key={index}>
            <button
              className="mr-40 h-72 w-80 rounded-3xl bg-[#A9DAAE] font-normal shadow-md ring-1 ring-black ring-opacity-5 hover:bg-green-400"
              type="button"
            >
              <div className="p-9 text-left text-[32px] text-black">
                {highlight.text}
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayerComponent;
