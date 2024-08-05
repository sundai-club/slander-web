"use client";
import SubmitButton from "./SubmitButton";
import AudioRecorder from "./AudioRecorder";
import PlayerComponent from "./finalOutPutScreen";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#D1EDE0] to-[#7ABF8C] text-white">
      <AudioRecorder />
      <PlayerComponent />
      <SubmitButton />
    </main>
  );
}
