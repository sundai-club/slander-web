'use client';

import AudioRecorder from "./AudioRecorder";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-col items-center justify-center space-y-4">Hello World!</div>
      <AudioRecorder />
    </main>
  );
}
