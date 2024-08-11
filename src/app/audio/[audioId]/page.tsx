"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SubmitButton from "../../SubmitButton";
import AudioRecorder from "../../AudioRecorder";
import PlayerComponent from "../../finalOutPutScreen";
import Image from "next/image";
import StrategyInput from "../../StrategyInput";
import { useAudioStore } from "../../AudioStore";
export default function HomePage({ params: { audioId } }) {
  const { selectedStrategy, setHighlights, setReturnedId, setIsProccessing } =
    useAudioStore();
  useEffect(() => {
    if (!audioId) return;
    function checkProcessStatus() {
      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(`/api/status/${audioId}`, {
            method: "POST",
          });
          const data = await response.json();
          if (data.status != "processing") {
            clearInterval(intervalId);
            setIsProccessing(false);
            setHighlights(data.data.highlights);
          }
          console.log(`Process is ${data.status}`);
        } catch (error) {
          console.error("Error checking process status:", error);
          clearInterval(intervalId);
          setError("Error checking process status"); // Set error message
        }
      }, 5000);
    }

    checkProcessStatus();
  }, [audioId]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-gradient-to-b from-[#D1EDE0] to-[#7ABF8C] text-white`}
    >
      <Image
        className="mt-2"
        src="/images/chucklebox.webp"
        alt="logo"
        width={400}
        height={100}
      />
      <div className="mt-20 flex min-h-screen flex-col items-center">
        <AudioRecorder />
        <PlayerComponent />
        <StrategyInput />
        <SubmitButton {...audioId} />
      </div>
    </main>
  );
}
